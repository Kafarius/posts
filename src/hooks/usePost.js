import { useQuery, gql } from "@apollo/client";


const GET_POST = gql`
    query($id: ID!) {
      post(id: $id) {
        id
        title
        body
        user{
          id
          name
        }
        comments {
          data {
            id
            name
            body
            email
          }
        }
      }
    }
`;

const DEL_POST = gql`
    mutation (
      $id: ID!
    ) {
      deletePost(id: $id)
    }
    
`;

export const usePost = (id) => {
    const { error, loading, data } = useQuery(GET_POST, {
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
export const useDelPost = (id) => {
    const { del_error, del_loading, del_data } = useQuery(DEL_POST, {
        variables: {
            id
        }
    });

    return {
        del_error,
        del_loading,
        del_data
    }
}