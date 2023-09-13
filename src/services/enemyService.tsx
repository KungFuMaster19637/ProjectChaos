import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ggstjwjbudxtvofirerz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnc3Rqd2pidWR4dHZvZmlyZXJ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjgwNjEyNCwiZXhwIjoyMDA4MzgyMTI0fQ.wM8vE922ciZCrp10bmHjwShlBJZ-Nln8zCrfkD4ZBLw";

const supabase = createClient(supabaseUrl, supabaseKey);
const EnemyTable = "Enemies";

export interface EnemyData {
  id: number;
  Name: string; // Replace with your actual column names
  Class: string;
  Weakness: string[]; // Replace with your actual column names
  Resistance: { type: string; value: number }[];
  ImageUrl: string;
}

export async function fetchListOfEnemies(): Promise<EnemyData[]> {
  try {
    const { data, error } = await supabase
      .from(EnemyTable)
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

export async function fetchListOfCounterEnemies(
  elements: string[]
): Promise<EnemyData[]> {
  try {
    const { data, error } = await supabase.from(EnemyTable).select("*");
    if (error) {
      throw error;
    }
    const filteredData = data.filter((enemy) => {
      const resistance = enemy.Resistance;
      return elements.every((element) =>
        Object.prototype.hasOwnProperty.call(resistance, element)
      );
    });
    console.log(filteredData);
    return filteredData;
  } catch (error) {
    console.error("Error fetching data:" + error);
    throw error;
  }
}
export default supabase;
