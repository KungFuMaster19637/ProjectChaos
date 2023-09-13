export interface CharacterData {
  id: number;
  Name: string;
  Element: string;
  Path: string;
  ImageUrl: string;
}

export const rateTeam = (characterData: CharacterData[]) => {
  const rating = {
    Cleanse: 0,
    Survivability: 0,
    Utility: 0,
    AOE: 0,
    ST: 0,
  };

  characterData.map((character) => {
    const checkDamage = ["Destruction", "Hunt", "Erudition", "Nihlity"];
    if (checkDamage.includes(character.Path)) {
      // The character's Path is one of the paths to check
      // You can perform your logic here
      rating.ST++;
    }

    const checkSurvive = ["Preservation, Abundance"];
    if (checkSurvive.includes(character.Path)) {
      rating.Survivability++;
    }

    const checkUtility = ["Harmony", "Nihility"];
    if (checkUtility.includes(character.Path)) {
      rating.Utility++;
    }
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
