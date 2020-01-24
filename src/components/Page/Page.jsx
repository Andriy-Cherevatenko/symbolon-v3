import React, { memo } from 'react';
import './Page.less';
import { useQuery } from '@apollo/react-hooks';
import ARTICLE_QUERY from '../../graphql/queries/ARTICLE_QUERY';

const Page = memo(() => {
    const { loading, data } = useQuery(ARTICLE_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const article = data.article.value;
    return <div className="page">{article}</div>;
});

export default Page;
