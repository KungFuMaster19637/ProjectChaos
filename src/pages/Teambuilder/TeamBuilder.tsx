import React, { useState, useEffect } from "react";
import {
  fetchListOfCharacters,
  CharacterData,
} from "../../services/characterService";
import "./TeamBuilder.css";
import { getCounters, rateTeam } from "../../services/teambuilderService";
import {
  EnemyData,
  fetchListOfCounterEnemies,
} from "../../services/enemyService";
import CharacterComponent from "../../components/CharacterComponent/CharacterComponent";
import TeamComponent from "../../components/TeamComponent/TeamComponent";
import EnemyTableComponent from "../../components/EnemyTableComponent/EnemyTableComponent";

const dummyCharacter: CharacterData = {
  id: 0,
  Name: "Empty Slot",
  Element: "None",
  Path: "None",
  ImageUrl: "src/assets/images/questionmarkwhite.png",
};

const TeamBuilder: React.FC = () => {
  // #region useStates
  const [selectedCharacters, setSelectedCharacters] = useState<CharacterData[]>(
    []
  );
  const [data, setData] = useState<CharacterData[]>([]);
  const [enemyTableData, setTableData] = useState<EnemyData[]>([]);
  const [showTable, setShowTable] = useState(false);

  // #endregion

  // #region useEffects
  useEffect(() => {
    // Create an array with 8 instances of dummyCharacter
    const dummyCharactersArray: CharacterData[] = Array(4).fill(dummyCharacter);
    setSelectedCharacters(dummyCharactersArray);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tableData = await fetchListOfCharacters();
        setData(tableData);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);
  // #endregion

  // #region Handle clicks
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
  // #endregion

  const getElementsList = async () => {
    const counterElements = getCounters(selectedCharacters);
    console.log("counter elements" + counterElements);
    const fetchData = async () => {
      try {
        const tableData = await fetchListOfCounterEnemies(counterElements);
        setTableData(tableData);
        setShowTable(true);
        scrollToTable();
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  };

  //Scroll to table effect
  const scrollToTable = () => {
    const tableElement = document.getElementById("counter-table");
    if (tableElement) {
      const yOffset = -100; // Adjust this value as needed to set the desired height above the table
      const y =
        tableElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="character-picker">
      <h2>Selected Characters</h2>
      <div className="team-container">
        <ul className="team-characters">
          {selectedCharacters.map((character, index) => (
            <li key={index} className={`character`}>
              <TeamComponent
                character={character}
                onRemove={removeTeamMember}
              ></TeamComponent>
            </li>
          ))}
        </ul>
        <button onClick={() => rateTeam(selectedCharacters)}>Rate Team</button>
        <button onClick={() => getElementsList()}>Calculate Counters</button>
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
      {showTable && (
        <div id="counter-table">
          <h2>Enemies that you can't weakness break</h2>
          <EnemyTableComponent enemyData={enemyTableData}></EnemyTableComponent>
        </div>
      )}
    </div>
  );
};

export default TeamBuilder;
