import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://api.bscgraph.org/subgraphs/name/bigswap/exchange-lite",
  }),
  cache: new InMemoryCache(),
});
