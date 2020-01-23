import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
//import state from './state';

import Articles from './components/Articles';

const state = {
    variable: {
        id: 1,
        name: 'App Bar Color',
        value: 'primary',
        __typename: 'AppBarColorSetting',
    },
    article: {
        name: 'article',
        value: <Articles.AriesTaurus />,
        __typename: 'article',
    },
    selectedCards: {
        name: 'selectedCards',
        value: ['Aries', 'Taurus'],
        __typename: 'selectedCards',
    },
};

const typeDefs = gql`
    type VariableType {
        id: Int!
        name: String!
        setting: String!
    }
    type ArticleType {
        id: Int!
        name: String!
        value: String!
    }
    type SelectedCardsType {
        id: Int!
        name: String!
        value: String!
    }
    type ArticleCardsType {
        article: ArticleType!
        selectedCards: SelectedCardsType!
    }
    type Query {
        variable: VariableType!
        article: ArticleType!
        selectedCards: SelectedCardsType!
    }
    type Mutation {
        updateVariable(value: String!): VariableType!
        selectZodiacSign(value: String!): null
    }
`;

const resolvers = {
    Query: {
        variable: () => state.variable,
        article: () => state.article,
        selectedCards: () => state.selectedCards,
    },
    Mutation: {
        updateVariable: (_, { setting }) => {
            state.variable.value = setting;
            return state.appBarColorSetting;
        },
        selectZodiacSign: (_, { value }) => {
            //reducer logic here
            state.article.value = <Articles.Cancer />;
            state.selectedCards = ['Cancer'];
            return null;
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
