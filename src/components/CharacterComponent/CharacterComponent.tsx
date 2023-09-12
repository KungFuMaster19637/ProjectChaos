import { CharacterData } from "../../services/characterService";

const CharacterComponent: React.FC<{ character: CharacterData }> = ({
  character,
}) => {
  return (
    <>
      <div className="character-selected">
        <img src={character.ImageUrl} />
        {character.Name}
      </div>
    </>
  );
};

export default CharacterComponent;
