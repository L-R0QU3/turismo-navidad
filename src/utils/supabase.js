import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcihpsxeymdxljzdbgix.supabase.co' // Ejemplo: https://xyzcompany.supabase.co
const supabaseAnonKey = 'sb_publishable_oVggCMtt3YQ0puM74auWFg_KVd2D5F_' // La que empieza con sb_publishable_...

export const supabase = createClient(supabaseUrl, supabaseAnonKey)