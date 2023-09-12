import React, { useState, useEffect } from "react";
import {
  fetchListOfCharacters,
  CharacterData,
} from "../../services/characterService";
import "./TeamBuilder.css";
import CharacterComponent from "../../components/CharacterComponent/CharacterComponent";
import TeamComponent from "../../components/TeamComponent/TeamComponent";

const TeamBuilder: React.FC = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<CharacterData[]>(
    []
  );
  const [data, setData] = useState<CharacterData[]>([]);

  // const [selectedTeamSpot, setSelectedTeamSpot] = useState<number>;
  const dummyCharacter: CharacterData = {
    id: 0,
    Name: "Empty Slot",
    Element: "None",
    Path: "None",
    ImageUrl: "src/assets/images/questionmarkwhite.png",
  };

  useEffect(() => {
    // Create an array with 8 instances of dummyCharacter
    const dummyCharactersArray: CharacterData[] = Array(4).fill(dummyCharacter);
    setSelectedCharacters(dummyCharactersArray);
    console.log(selectedCharacters);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableData = await fetchListOfCharacters();
        setData(tableData);
        // console.log(tableData);
        // console.log(data);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  const handleCharacterClick = (character: CharacterData) => {
    const dummyIndex = selectedCharacters.findIndex((char) => char.id === 0);

    if (selectedCharacters.includes(character)) {
      // Remove the character and replace it with a dummy character
      const updatedTeam = [...selectedCharacters];
      updatedTeam[updatedTeam.indexOf(character)] = dummyCharacter;
      setSelectedCharacters(updatedTeam);
    } else if (dummyIndex !== -1) {
      // Replace the first dummy character with the new character
      const updatedTeam = [...selectedCharacters];
      updatedTeam[dummyIndex] = character;
      setSelectedCharacters(updatedTeam);
    } else if (selectedCharacters.length < 4) {
      // Add the new character to the end if there's space
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const removeTeamMember = (character: CharacterData) => {
    const updatedTeam = [...selectedCharacters];
    updatedTeam[updatedTeam.indexOf(character)] = dummyCharacter;
    setSelectedCharacters(updatedTeam);
  };

  return (
    <div className="character-picker">
      <h2>Selected Characters</h2>
      <div className="team-container">
        <ul className="selected-characters">
          {selectedCharacters.map((character, index) => (
            <li
              key={index}
              className={`character ${
                selectedCharacters.includes(character) ? "selected" : ""
              }`}
            >
              <TeamComponent
                character={character}
                onRemove={removeTeamMember}
              ></TeamComponent>
            </li>
          ))}
        </ul>
        {/* <div className="team">
          <div className="character-selected">
            <img src=""></img>
            <span className="close">&times;</span>
          </div>
        </div> */}
      </div>
      <h2>Character Picker</h2>
      <div className="character-list">
        {data.map((characterData, index) => (
          <div
            key={index}
            className={`character ${
              selectedCharacters.includes(characterData) ? "selected" : ""
            }`}
            onClick={() => handleCharacterClick(characterData)}
          >
            <CharacterComponent character={characterData}></CharacterComponent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBuilder;
