import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  // Manejo de CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 1. Obtener y validar los datos del cuerpo de la solicitud
    const { payment_id, updates, old_amount, debtor_number } = await req.json()

    if (!payment_id || !updates || old_amount === undefined || !debtor_number) {
      throw new Error('Faltan parámetros requeridos: payment_id, updates, old_amount, o debtor_number.')
    }

    const new_amount = parseFloat(updates.payment_amount)
    const old_amount_float = parseFloat(old_amount)

    if (isNaN(new_amount) || isNaN(old_amount_float)) {
      throw new Error('Los montos (nuevo y anterior) deben ser números válidos.')
    }

    // 2. Calcular la diferencia para ajustar el saldo
    const difference = new_amount - old_amount_float

    // 3. Actualizar el registro del pago
    const { error: paymentError } = await supabase
      .from('payments')
      .update(updates)
      .eq('id', payment_id)

    if (paymentError) throw paymentError

    // 4. Actualizar el saldo del crédito/deudor correspondiente.
    // ADVERTENCIA: Este método (leer y luego escribir) no es atómico y puede fallar
    // en casos de alta concurrencia. Una función RPC (plpgsql) en la base de datos es la solución más robusta.
    const { data: debtor, error: fetchError } = await supabase.from('debtors').select('balance').eq('debtor_number', debtor_number).single()
    if (fetchError) throw new Error(`No se pudo encontrar el crédito asociado: ${fetchError.message}`)

    const newBalance = (parseFloat(debtor.balance as string) || 0) - difference

    const { error: updateError } = await supabase.from('debtors').update({ balance: newBalance }).eq('debtor_number', debtor_number)
    if (updateError) throw new Error(`No se pudo actualizar el saldo del crédito: ${updateError.message}`)

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (err) {
    console.error('Error en la función update-payment:', err.message)
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})