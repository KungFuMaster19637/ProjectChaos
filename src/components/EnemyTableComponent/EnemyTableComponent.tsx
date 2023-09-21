import { EnemyData } from "../../services/enemyService";
import { getElementImage } from "../../services/imageService";

const EnemyTableComponent: React.FC<{ enemyData: EnemyData[] }> = ({
  enemyData,
}) => {
  return (
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
        {enemyData.map((enemy) => (
          <tr key={enemy.id}>
            <td key={`name-${enemy.id}`} className="enemy-name">
              {enemy.Name}
            </td>
            <td key={`image-${enemy.id}`} className="enemy-image">
              <img src={enemy.ImageUrl} alt={enemy.Name} />
            </td>
            <td key={`class-${enemy.id}`}>{enemy.Class}</td>
            <td key={`weakness-${enemy.id}`} className="enemy-typing">
              {Object.keys(enemy.Weakness).map((element) => (
                <img
                  key={`weakness-${element}-${enemy.id}`}
                  src={getElementImage(element)}
                  alt={`Weakness: ${element}`}
                />
              ))}
            </td>
            <td key={`resistance-${enemy.id}`} className="enemy-typing">
              {Object.keys(enemy.Resistance).map((element) => (
                <img
                  key={`resistance-${element}-${enemy.id}`}
                  src={getElementImage(element)}
                  alt={`Resistance: ${element}`}
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EnemyTableComponent;
