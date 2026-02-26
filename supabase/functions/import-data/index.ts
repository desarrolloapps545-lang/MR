import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { rows } = await req.json()

    if (!rows || !Array.isArray(rows)) throw new Error('Datos inválidos')

    // 1. Preparar Upsert de Clientes (Deduplicar por cédula en el lote)
    const clientsMap = new Map()
    rows.forEach((r: any) => {
        if (r.cedula) {
            clientsMap.set(r.cedula, {
                cedula: r.cedula,
                name: r.nombre,
                phone: r.telefono,
                address: r.direccion,
                municipality: r.municipio,
                asesor_name: r.asesor,
                payment_term: [r.tipoPago],
                total_recaudo: r.recaudoTotal,
                imported: true
                // created_at se maneja por default en BD o se puede añadir si es crítico
            })
        }
    })
    
    const clientsToUpsert = Array.from(clientsMap.values())
    if (clientsToUpsert.length > 0) {
        const { error: clientError } = await supabase.from('clients').upsert(clientsToUpsert, { onConflict: 'cedula' })
        if (clientError) throw clientError
    }

    // 2. Preparar Inserción de Créditos (Debtors)
    // Necesitamos mapear el índice de la fila con el crédito insertado para vincular el pago
    const debtorsToInsert: any[] = []
    const rowIndicesWithCredit: number[] = []

    rows.forEach((r: any, index: number) => {
        if (r.creditoNuevo > 0 || r.represte > 0) {
            const isNew = r.creditoNuevo > 0
            const saleValue = isNew ? r.creditoNuevo : r.represte
            
            debtorsToInsert.push({
                cedula: r.cedula,
                name: r.nombre,
                phone: r.telefono,
                address: r.direccion,
                municipality: r.municipio,
                asesor_name: r.asesor,
                credit_type: isNew ? 'Nuevo' : 'Represte',
                balance: r.saldo,
                sale_value: saleValue,
                valor_cuota: r.valorCuota,
                number_of_payments: r.nroCuotas,
                remaining_payments: r.nroCuotas,
                payment_term: [r.tipoPago],
                imported: true,
                created_at: r.fechaPrestamo,
                sale_date: r.fechaPrestamoClean
            })
            rowIndicesWithCredit.push(index)
        }
    })

    let createdDebtors: any[] = []
    if (debtorsToInsert.length > 0) {
        // Insertar y devolver IDs para vincular pagos
        const { data, error: debtorError } = await supabase.from('debtors').insert(debtorsToInsert).select('id')
        if (debtorError) throw debtorError
        createdDebtors = data
    }

    // 3. Preparar Inserción de Pagos (Payments)
    const paymentsToInsert: any[] = []
    
    rows.forEach((r: any, index: number) => {
        if (r.abono > 0) {
            // Verificar si esta fila creó un crédito para vincularlo
            const creditIndex = rowIndicesWithCredit.indexOf(index)
            let debtorId = null
            
            if (creditIndex !== -1 && createdDebtors[creditIndex]) {
                debtorId = createdDebtors[creditIndex].id
            }

            paymentsToInsert.push({
                debtor_id: debtorId,
                cedula: r.cedula,
                debtor_name: r.nombre,
                payment_amount: r.abono,
                payment_date: r.fechaPrestamoClean,
                municipality: r.municipio,
                user_name: r.asesor,
                // CORRECCIÓN: valor_cuota ELIMINADO de payments
                created_at: r.fechaPrestamo,
                imported: true
            })
        }
    })

    if (paymentsToInsert.length > 0) {
        const { error: payError } = await supabase.from('payments').insert(paymentsToInsert)
        if (payError) throw payError
    }

    return new Response(JSON.stringify({ success: true, count: rows.length }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
