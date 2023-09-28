export interface CharacterData {
  id: number;
  Name: string;
  Element: string;
  Path: string;
  ImageUrl: string;
  Rating: { [type: string]: number };
}

export const rateTeam = (characterData: CharacterData[]) => {
  const rating = {
    Protection: 0,
    Survivability: 0,
    Utility: 0,
    AOE: 0,
    ST: 0,
  };

  characterData.map((character) => {
    console.log(character.Rating);

    Object.entries(character.Rating).map(([criteria, value]) => {
      switch (criteria) {
        case "ST":
          rating.ST += value;
          break;
        case "AOE":
          rating.AOE += value;
          break;
        case "Utility":
          rating.Utility += value;
          break;
        case "Toughness":
          rating.Survivability += value;
          break;
        case "Protection":
          rating.Protection += value;
          break;
      }
    });
  });
  console.log(rating);
  return rating;
};

export const getCounters = (characterData: CharacterData[]) => {
  const characterElements: string[] = [];

  characterData.map((character) => {
    if (!characterElements.includes(character.Element)) {
      characterElements.push(character.Element);
    }
  });

  console.log(characterElements);
  return characterElements;
};
