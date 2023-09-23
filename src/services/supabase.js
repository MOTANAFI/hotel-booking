
import { createClient } from '@supabase/supabase-js'

 export const supabaseUrl = 'https://bmmtdheggenrvgswdwam.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbXRkaGVnZ2VucnZnc3dkd2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzMzE3NTgsImV4cCI6MjAwOTkwNzc1OH0.dRsHJSl3S8q9nnrSgxeyF-ek4tsmGCgKfSuC27gd300";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase