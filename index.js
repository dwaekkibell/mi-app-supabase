import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ysttkunvkaoxjxcwzaxq.supabase.co'
const supabaseKey = 'sb_publishable_9Lb8IaWX2k07sQS-JZ1LPg_-F5mlK40'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}

obtenerEstudiantes()