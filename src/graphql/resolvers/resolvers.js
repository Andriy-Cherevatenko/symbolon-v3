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
        selectZodiacSign: (_, { value }) => {
            console.log('Resolver, value = ', value);

            state.articleSelectedCards = {
                article: <Articles.Cancer />,
                selectedCards: ['Cancer'],
            };

            //reducer logic here
            // state.article.value = <Articles.Cancer />;
            // state.selectedCards = ['Cancer'];
            console.log(
                'Resolver, state.articleSelectedCards = ',
                state.articleSelectedCards
            );
            return state.articleSelectedCards;
            // console.log('article, value = ', state.articleSelectedCards.article);
            // console.log(                'selectedCards, value = ',                state.articleSelectedCards.selectedCards
            // );
        },
    },
};

export default resolvers;
