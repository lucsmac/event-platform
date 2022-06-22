import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pl8c9h1tw101xx48excjcn/master',
  cache: new InMemoryCache()
})
