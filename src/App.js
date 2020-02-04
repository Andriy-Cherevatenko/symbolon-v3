import React, { memo } from 'react';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import { useQuery } from '@apollo/react-hooks';
import SYMBOLON_QUERY from './graphql/queries/SYMBOLON_QUERY';
import articleResolver from './constants/articleResolver';

const App = memo(() => {
    const { loading, data } = useQuery(SYMBOLON_QUERY);
    if (loading) return null;
    return (
        <React.Fragment>
            <Page article={articleResolver[data.symbolon.article]} />
            <Menu selectedCards={data.symbolon.selectedCards} />
        </React.Fragment>
    );
});

export default App;
