import React, { memo } from 'react';
import './Page.less';
import PropTypes from 'prop-types';

const Page = memo((props) => {
    const createMarkup = (html) => ({ __html: html });
    return (
        <div
            className="page"
            dangerouslySetInnerHTML={createMarkup(props.article)}
        />
    );
});

export default Page;

Page.propTypes = {
    article: PropTypes.object,
};
