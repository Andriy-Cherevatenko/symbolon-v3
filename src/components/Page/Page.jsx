import React, { memo } from 'react';
import './Page.less';
import { useSelector } from 'react-redux';

const Page = memo(() => {
    const article = useSelector((state) => state.get('article'));
    return <div className="page">{article}</div>;
});

export default Page;
