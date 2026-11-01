import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ysttkunvkaoxjxcwzaxq.supabase.co'
const supabaseKey = 'sb_publishable_9Lb8IaWX2k07sQS-JZ1LPg_-F5mlK40'
const supabase = createClient(supabaseUrl, supabaseKey)

async function gestionarEstudiantes() {
  // 1. Insertar un nuevo estudiante
  const { data: insertData, error: insertError } = await supabase
    .from('estudiantes')
    .insert([
      { nombre: 'Carlos', carrera: 'Ingeniería' }
    ])

  if (insertError) {
    console.error('Error al insertar:', insertError)
    return
  }
  console.log('Estudiante insertado correctamente.')

  // 2. Consultar todos los estudiantes
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  if (error) {
    console.error('Error al consultar:', error)
  } else {
    console.log('Datos:', data)
  }
}

gestionarEstudiantes()