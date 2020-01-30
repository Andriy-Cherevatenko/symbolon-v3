import React, { memo } from 'react';
import './Page.less';
import { useQuery } from '@apollo/react-hooks';
import SYMBOLON_QUERY from '../../graphql/queries/SYMBOLON_QUERY';
import articleResolver from '../../constants/articleResolver';

const Page = memo(() => {
    const { loading, data } = useQuery(SYMBOLON_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const article = articleResolver[data.symbolon.article];
    return <div className="page">{article}</div>;
});

export default Page;
