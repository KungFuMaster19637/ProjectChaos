import supabase from "./characterService";
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
    const { data, error } = await supabase
      .from(EnemyTable)
      .select("*")
      .order("Name");
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
