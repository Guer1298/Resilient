import { createClient } from "@supabase/supabase-js";
import type { Database } from "./supabase";

// Vars desde .env
const supabaseUrl = import.meta.env.VITE_PROJECT_URL_SUPABASE;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

// Validación (para evitar cliente roto o errores 400)
if (!supabaseUrl) {
  throw new Error("❌ VITE_PROJECT_URL_SUPABASE no está definido en .env");
}

if (!supabaseKey) {
  throw new Error("❌ VITE_SUPABASE_API_KEY no está definido en .env");
}

// Crear cliente tipado
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
