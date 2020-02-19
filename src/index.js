import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import App from './App';
import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({
    cache: new InMemoryCache({
        freezeResults: true,
    }),
    typeDefs,
    resolvers,
    assumeImmutableResults: true,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
serviceWorker.register();
