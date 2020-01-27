import React from 'react';
import Articles from '../../components/Articles';

const store = {
    article: {
        id: 1,
        name: 'article',
        value: <Articles.BlankPage />,
        __typename: 'article',
    },
    selectedCards: {
        id: 2,
        name: 'selectedCards',
        value: [],
        __typename: 'selectedCards',
    },
};

export default store;
