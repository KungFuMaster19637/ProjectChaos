import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ggstjwjbudxtvofirerz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnc3Rqd2pidWR4dHZvZmlyZXJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjgwNjEyNCwiZXhwIjoyMDA4MzgyMTI0fQ.wM8vE922ciZCrp10bmHjwShlBJZ-Nln8zCrfkD4ZBLw";

const supabase = createClient(supabaseUrl, supabaseKey);
const characterTable = "Characters";

export interface CharacterData {
  id: number;
  Name: string;
  Element: string;
  Path: string;
  ImageUrl: string;
  Rating: { type: string; value: number }[];
}

export async function fetchListOfCharacters(): Promise<CharacterData[]> {
  try {
    const { data, error } = await supabase
      .from(characterTable)
      .select("*")
      .order("Name");
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:" + error);
    throw error;
  }
}

export default supabase;
