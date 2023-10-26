import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const supabaseUrl = "https://nwsqebzedftgldayghky.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53c3FlYnplZGZ0Z2xkYXlnaGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNzgxMjEsImV4cCI6MjAxMTg1NDEyMX0.irTTaQ1MpKeG-f6HI-QsSG1CfTdXz0xGF2I1jIpXpZ4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
