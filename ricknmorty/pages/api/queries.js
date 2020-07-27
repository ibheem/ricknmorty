import gql from "graphql-tag";
import client from "./characters";

export const queryAllCharacters = gql`
    query GetCharacters($page: Int!,$name: String!,$species: String!,$gender: String!){
        characters(page: $page, filter: { name: $name, gender:$gender, species: $species }) {
            info {
              pages
              prev
              next
            }
            results {
             name
              id
              status
              species
              gender
              image
              created
              origin{
                name
              }
              location {
                name
              }
            }
        }
    
    
}`;