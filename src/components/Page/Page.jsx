import React, { memo } from 'react';
import './Page.less';
import { useQuery } from '@apollo/react-hooks';
//import ARTICLE_QUERY from '../../graphql/queries/ARTICLE_QUERY';
import ARTICLE_SELECTED_CARDS_QUERY from '../../graphql/queries/ARTICLE_SELECTED_CARDS_QUERY';

const Page = memo(() => {
    const { loading, data } = useQuery(ARTICLE_SELECTED_CARDS_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const article = data.articleSelectedCards.article;

    console.log('article', article);
    return <div className="page">{article}</div>;
});

export default Page;

/*
const Page = memo(() => {
    const { loading, data } = useQuery(ARTICLE_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const article = data.article.value;
    console.log(article);
    return <div className="page">{article}</div>;
});

export default Page;
*/
