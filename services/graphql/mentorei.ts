import { ApolloClient, InMemoryCache } from '@apollo/client';

export const mentoreiApolloClient = new ApolloClient({
  uri: 'https://mentorei.app',
  cache: new InMemoryCache(),
});
