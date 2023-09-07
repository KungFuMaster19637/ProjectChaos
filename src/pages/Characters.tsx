import { fetchListOfCharacters, TableData } from "../services/characterService";
import { useEffect, useState } from "react";
const Characters = () => {
  const [data, setData] = useState<TableData[]>([]);

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
              <td>{data.Name}</td>
              <td>
                <img src={data.ImageUrl}></img>
              </td>
              <td>
                <img
                  src={`src/assets/images/elements/${data.Element}.webp`}
                ></img>
                {/* {data.Element} */}
              </td>
              <td>
                {" "}
                <img src={`src/assets/images/paths/${data.Path}.webp`}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Characters;
