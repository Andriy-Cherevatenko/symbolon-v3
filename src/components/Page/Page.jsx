import React, { memo } from 'react';
import './Page.less';
import { useSelector } from 'react-redux';

export const getArticle = (state) => {state.get('article')}; 
const Page = memo(() => {
    const article = useSelector(getArticle);
    return <div className="page">{article}</div>;
});

export default Page;
Page.displayName = 'Page';
