import React, { memo } from 'react';
import './Page.less';
import { useSelector } from 'react-redux';

const Page = memo(() => {
    const getArticle = (state) => state.get('article');
    const article = useSelector(getArticle);
    return <div className="page">{article}</div>;
});

export default Page;

