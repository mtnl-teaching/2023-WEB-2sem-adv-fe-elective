import { Dispatch, SetStateAction, useEffect, useState } from "react";

const endpoint = "https://rickandmortyapi.com/graphql";

export interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
}

const GET_ALL_CHARACTERS = `
  query {
    characters {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

const graphqlQuery = {
  query: GET_ALL_CHARACTERS,
  variables: {},
};

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(graphqlQuery),
};

const useVanillaGraphql = (): [
  Character[],
  Dispatch<SetStateAction<Character[]>>
] => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((body) => {
        setAllCharacters(body.data.characters.results);
      });
  }, []);
  return [allCharacters, setAllCharacters];
};

export default useVanillaGraphql;
