import { gql, useQuery } from "@apollo/client";
import { episode_overview } from "./__generated__/episode_overview";

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

const GET_ALL_EPISODES = gql`
  query episode_overview {
    episodes {
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

const useApollo = () => {
  return useQuery<episode_overview>(GET_ALL_EPISODES);
};

export default useApollo;
