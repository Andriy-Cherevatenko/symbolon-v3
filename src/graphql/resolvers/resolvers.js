import React from 'react';
import Articles from '../../components/Articles';
import state from '../../state';

const resolvers = {
    Query: {
        variable: () => state.variable,
        article: () => state.article,
        selectedCards: () => state.selectedCards,
        articleSelectedCards: () => state.articleSelectedCards,
    },
    Mutation: {
        updateVariable: (_, { setting }) => {
            state.variable.value = setting;
            return state.appBarColorSetting;
        },

        updateArticle: (_, { value }) => {
            // console.log('Resolver, value = ', value);
            state.article.value = value;
            return state.article;
        },

        updateCards: (_, { value }) => {
            state.selectedCards.value = value;
            return state.selectedCards;
        },
    },
};

export default resolvers;
