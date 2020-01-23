import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SettingsComponent from './components/SettingsComponent';
import VARIABLE_QUERY from './graphql/VARIABLE_QUERY';

function App2() {
    const { loading, data } = useQuery(VARIABLE_QUERY);

    if (loading) return <h2>Loading...</h2>;
    return (
        <div>
            <AppBar position="static" color={data.variable.value}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        State Management with Apollo
                    </Typography>
                </Toolbar>
            </AppBar>
            <SettingsComponent
                value={data.variable.value === 'primary' ? 'secondary' : 'primary'}
            />
        </div>
    );
}

export default App2;
