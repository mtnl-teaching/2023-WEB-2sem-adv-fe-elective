import { useEffect } from "react";

// Written with backticks
// Query can be anonymous
const MY_FIRST_QUERY = `
  query samplePokeAPIquery {
    pokemon_v2_pokemonspecies {
      base_happiness
      capture_rate
      id
      name
    }
  }
`;

interface pokemon_v2_pokemonspecies {
  base_happiness: number;
  capture_rate: number;
  id: number;
  name: string;
}

const request = {
  query: MY_FIRST_QUERY,
  variables: {},
};

export interface MyFirstData {}

export default function VanillaGraphExample() {
  // Standard useEffect
  useEffect(() => {
    // Standard fetch
    fetch("https://beta.pokeapi.co/graphql/v1beta", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
      });
  });

  return <></>;
}
