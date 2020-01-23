import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
import state from './state';

const typeDefs = gql`
    type VariableType {
        id: Int!
        name: String!
        setting: String!
    }
    type Query {
        variable: VariableType!
    }
    type Mutation {
        updateVariable(value: String!): VariableType!
    }
`;

const resolvers = {
    Query: {
        variable: () => state.variable,
    },
    Mutation: {
        updateVariable: (_, { setting }) => {
            state.variable.value = setting;
            return state.appBarColorSetting;
        },
    },
};

const client = new ApolloClient({
    cache: new InMemoryCache({
        freezeResults: true,
    }),
    typeDefs,
    resolvers,
    assumeImmutableResults: true,
});

const TogglesApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<TogglesApp />, document.getElementById('root'));
