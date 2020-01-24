import React from 'react';
import Articles from './components/Articles';

const state = {
    variable: {
        id: 1,
        name: 'App Bar Color',
        value: 'primary',
        __typename: 'AppBarColorSetting',
    },
    article: {
        id: 2,
        name: 'article',
        value: <Articles.AriesTaurus />,
        __typename: 'article',
    },
    selectedCards: {
        id: 3,
        name: 'selectedCards',
        value: ['Aries', 'Taurus'],
        __typename: 'selectedCards',
    },
    articleSelectedCards: {
        id: 4,
        name: 'ArticleSelectedCards',

        article: <Articles.AriesTaurus />,
        selectedCards: ['Aries', 'Taurus'],
        __typename: 'ArticleSelectedCards',
    },
};

export default state;
