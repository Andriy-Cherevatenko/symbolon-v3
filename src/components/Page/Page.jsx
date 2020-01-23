import React, { memo } from 'react';
import './Page.less';
import { useQuery } from '@apollo/react-hooks';
import ARTICLE_QUERY from '../../graphql/ARTICLE_QUERY';

const Page = memo(() => {
    const { loading, data } = useQuery(ARTICLE_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const article = data.article.value;
    console.log(article);
    return <div className="page">{article}</div>;
});

export default Page;
