import { useQuery, gql } from "@apollo/client";
import React, { useEffect } from "react";
import { allSpecies } from "./__generated__/allSpecies";

/**
To get Apollo and Type generation working run the following command to install the required packages:
 
first:
npm install @apollo/client graphql

second:
npm install -D apollo@2.33.4 apollo-codegen-core@0.40.3 apollo-language-server@1.26.3 graphql@15.5.3 

Use this guide for initiating Apollo in your project
https://www.apollographql.com/docs/react/get-started/#step-1-setup
*/

// Written with backticks
// Query must have a name in order to type generate.
const MY_SECOND_QUERY = gql`
  query allSpecies($limit: Int, $offset: Int) {
    pokemon_v2_pokemonspecies(limit: $limit, offset: $offset) {
      base_happiness
      capture_rate
      id
      name
    }
  }
`;

export default function ApolloExample() {
  const { loading, data, error } = useQuery<allSpecies>(MY_SECOND_QUERY, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  useEffect(() => {
    console.log("Hi from Apollo Example", data);
  }, [data]);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>There was an unexpected error</p>}
      {data &&
        data.pokemon_v2_pokemonspecies.map((specie) => {
          return <p key={specie.id}>{specie.name}</p>;
        })}
    </div>
  );
}
