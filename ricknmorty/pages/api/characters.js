// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { useQuery } from "@apollo/react-hooks";
import { queryAllCharacters } from "./queries"

const endpoint = 'https://rickandmortyapi.com/graphql/';
const cache = new InMemoryCache();
export const client = new ApolloClient({
  link: new HttpLink({uri: endpoint}),
  cache
});


export function loadCharacters(params){
  const { page, filter:{name},filter:{species},filter:{gender} } = params;
  const results = useQuery(queryAllCharacters,{
    variables: {page, name, species, gender},
  });
  if(results){
      return results;
  }
   
};
