import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:3333/graphql';

const client = (token?: string) =>
  token
    ? new GraphQLClient(endpoint, {
        headers: {
          authorization: token,
        },
      })
    : new GraphQLClient(endpoint);

export default client;
