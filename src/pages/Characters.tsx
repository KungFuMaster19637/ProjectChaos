import {
  fetchListOfCharacters,
  CharacterData,
} from "../services/characterService";
import { getElementImage, getPathImage } from "../services/imageService";
("../services/imageService");
import { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState<CharacterData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableData = await fetchListOfCharacters();
        setData(tableData);
        console.log(tableData);
        console.log(data);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    // Perform actions that depend on the updated data here
    console.log(data); // Updated data
  }, [data]);
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Element</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td className="character-name">{data.Name}</td>
              <td>
                <img src={data.ImageUrl}></img>
              </td>
              <td>
                <img
                  // src={`src/assets/images/elements/${data.Element}.webp`}
                  src={getElementImage(data.Element)}
                ></img>
                {/* {data.Element} */}
              </td>
              <td>
                {" "}
                <img src={getPathImage(data.Path)}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
