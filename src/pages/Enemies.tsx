import EnemyTableComponent from "../components/EnemyTableComponent/EnemyTableComponent";
import { fetchListOfEnemies, EnemyData } from "../services/enemyService";
import { useEffect, useState } from "react";
const Enemies = () => {
  const [data, setData] = useState<EnemyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableData = await fetchListOfEnemies();
        setData(tableData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Perform actions that depend on the updated data here
    data.map((item) => {
      console.log(item.Resistance);
    });
  }, [data]);
  return (
    <div className="table-container">
      <EnemyTableComponent enemyData={data} />
    </div>
  );
};
export default Enemies;
