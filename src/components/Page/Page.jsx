import React, { memo } from 'react';
import './Page.less';
import PropTypes from 'prop-types';

const Page = memo((props) => {
    return <div className="page">{props.article}</div>;
});

export default Page;

Page.propTypes = {
    article: PropTypes.object,
};
