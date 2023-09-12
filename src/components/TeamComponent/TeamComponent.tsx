import { CharacterData } from "../../services/characterService";

const TeamComponent: React.FC<{
  character: CharacterData | null;
  onRemove: (character: CharacterData) => void;
}> = ({ character, onRemove }) => {
  const defaultImage = "src/assets/images/questionmark.jpg";

  const removeTeamMember = () => {
    if (character) {
      onRemove(character);
    }
  };

  return (
    <>
      <div className="character-selected" onClick={removeTeamMember}>
        <img src={character ? character.ImageUrl : defaultImage} />
        {character ? character.Name : ""}
      </div>
    </>
  );
};

export default TeamComponent;
