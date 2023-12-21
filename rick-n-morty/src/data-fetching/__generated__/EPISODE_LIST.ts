/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EPISODE_LIST
// ====================================================

export interface EPISODE_LIST_episodes_results {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
  /**
   * Time at which the episode was created in the database.
   */
  created: string | null;
}

export interface EPISODE_LIST_episodes {
  __typename: "Episodes";
  results: (EPISODE_LIST_episodes_results | null)[] | null;
}

export interface EPISODE_LIST {
  /**
   * Get the list of all episodes
   */
  episodes: EPISODE_LIST_episodes | null;
}
