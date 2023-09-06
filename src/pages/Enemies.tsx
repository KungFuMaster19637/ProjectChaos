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
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Class</th>
            <th>Weaknesses</th>
            <th>Resistances</th>
          </tr>
        </thead>
        <tbody>
          {data.map((enemy) => (
            <tr key={enemy.id}>
              <td>{enemy.Name}</td>
              <td className="enemy-image">
                <img src={enemy.ImageUrl}></img>
              </td>
              <td>{enemy.Class}</td>
              <td className="enemy-typing">
                {Object.keys(enemy.Weakness).map((element) => (
                  <img src={`src/assets/images/elements/${element}.webp`} />
                ))}
              </td>
              <td className="enemy-typing">
                {Object.keys(enemy.Resistance).map((element) => (
                  <img src={`src/assets/images/elements/${element}.webp`} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Enemies;
