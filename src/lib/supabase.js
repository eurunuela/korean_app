import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzpixnzvvvnpudmojyvk.supabase.co'
const supabaseAnonKey = 'sb_publishable_RRL_v9yQVa3zpVoMfxU8tw_sAKTabtj'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
