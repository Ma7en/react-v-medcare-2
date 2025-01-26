// my

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pcyqsotaevsfhfargbfl.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeXFzb3RhZXZzZmhmYXJnYmZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNjY3MzQsImV4cCI6MjAyMjY0MjczNH0.IEKCCoVgVwxtoUyZOfpKPfqiK2-UoELqQTc9UQvq4MI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
