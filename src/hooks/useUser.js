import { useQuery, gql } from "@apollo/client";


const GET_USER = gql`
    query($id: ID!) {
      user(id: $id) {
          id
          name
          username
          email
          phone
          posts {
            data {
                id
                title
                body
            }
          }
      }
    }
`;
export const useUser = (id) => {
    const { error, loading, data } = useQuery(GET_USER, {
        variables: {
            id
        }
    });

    return {
        error,
        loading,
        data
    }
}