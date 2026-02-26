import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { payment_id, updates, old_amount, debtor_id } = await req.json()

    // 1. Actualizar el pago
    const { error: payError } = await supabase.from('payments').update(updates).eq('id', payment_id)
    if (payError) throw payError

    // 2. Recalcular saldo del deudor
    // Diferencia: Si old=100 y new=80, diff=20. El cliente debe 20 más (saldo aumenta).
    const diff = parseFloat(old_amount) - parseFloat(updates.payment_amount)

    // Obtener saldo actual
    const { data: debtor, error: debtFetchError } = await supabase
        .from('debtors')
        .select('balance')
        .eq('id', debtor_id)
        .single()
    
    if (debtFetchError) throw debtFetchError

    const newBalance = (parseFloat(debtor.balance) || 0) + diff

    const { error: debtUpdateError } = await supabase
        .from('debtors')
        .update({ balance: newBalance })
        .eq('id', debtor_id)

    if (debtUpdateError) throw debtUpdateError

    return new Response(JSON.stringify({ success: true }), {
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
