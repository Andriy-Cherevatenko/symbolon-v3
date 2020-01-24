import React, { memo } from 'react';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import { useQuery } from '@apollo/react-hooks';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SettingsComponent from './components/SettingsComponent';
import VARIABLE_QUERY from './graphql/queries/VARIABLE_QUERY';

const App = memo(() => {
    const { loading, data } = useQuery(VARIABLE_QUERY);
    if (loading) return <h2>Loading...</h2>;
    return (
        <React.Fragment>
            <AppBar position="static" color={data.variable.value}>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        State Management with Apollo
                    </Typography>
                </Toolbar>
            </AppBar>
            <SettingsComponent
                value={data.variable.value === 'primary' ? 'secondary' : 'primary'}
            />

            <Page />
            <Menu />
        </React.Fragment>
    );
});

export default App;
