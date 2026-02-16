import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

Deno.serve(async (req) => {
  try {
    // 1. Configuración con tus credenciales proporcionadas
    const SUPABASE_URL = 'https://fiahwrkuouceyncxoukj.supabase.co'
    // Usamos la clave secreta (sb_secret) para tener permisos de borrado (Service Role)
    const SUPABASE_SERVICE_ROLE_KEY = 'sb_secret_602DmNyNuatkCv-jxrNOXg_2qzrHC_g'

    // 2. Inicializar cliente de Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    // 3. Calcular la fecha límite (hace 15 minutos)
    const fifteenMinsAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString()

    console.log(`Ejecutando limpieza. Borrando alertas anteriores a: ${fifteenMinsAgo}`)

    // 4. Ejecutar borrado en la tabla alerts_represt
    const { error, count } = await supabase
      .from('alerts_represt')
      .delete({ count: 'exact' }) // Contar cuántos se borran
      .lt('created_at', fifteenMinsAgo) // Filtro: created_at < hace 15 mins

    if (error) {
      console.error('Error borrando alertas:', error)
      return new Response(JSON.stringify({ error: error.message }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      })
    }

    // 5. Responder éxito
    return new Response(
      JSON.stringify({ 
        message: 'Limpieza completada exitosamente', 
        deleted_count: count 
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
