import { useQuery, gql } from "@apollo/client";


const GET_USERS = gql`
    query {
      users {
        data {
          id
          name
          username
          email
          phone
          
        }
      }
    }
`;
export const useUsers = () => {
    const { error, loading, data } = useQuery(GET_USERS);

    return {
        error,
        loading,
        data
        }
}