import {gql, useQuery} from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query getAllCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

const useGetAllCharacters = (page: number) => {
  return useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page
    }
  });
}

export default useGetAllCharacters;