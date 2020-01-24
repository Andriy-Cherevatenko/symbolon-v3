import React, { memo } from 'react';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';

const App = memo(() => {
    return (
        <React.Fragment>
            <Page />
            <Menu />
        </React.Fragment>
    );
});

export default App;
