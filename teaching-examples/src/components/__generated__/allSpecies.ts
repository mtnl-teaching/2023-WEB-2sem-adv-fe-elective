/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allSpecies
// ====================================================

export interface allSpecies_pokemon_v2_pokemonspecies {
  __typename: "pokemon_v2_pokemonspecies";
  base_happiness: number | null;
  capture_rate: number | null;
  id: number;
  name: string;
}

export interface allSpecies {
  /**
   * An array relationship
   */
  pokemon_v2_pokemonspecies: allSpecies_pokemon_v2_pokemonspecies[];
}

export interface allSpeciesVariables {
  limit?: number | null;
  offset?: number | null;
}
