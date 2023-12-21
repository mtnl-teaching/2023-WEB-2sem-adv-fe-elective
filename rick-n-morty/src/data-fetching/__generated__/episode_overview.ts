/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: episode_overview
// ====================================================

export interface episode_overview_episodes_results {
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

export interface episode_overview_episodes {
  __typename: "Episodes";
  results: (episode_overview_episodes_results | null)[] | null;
}

export interface episode_overview {
  /**
   * Get the list of all episodes
   */
  episodes: episode_overview_episodes | null;
}
