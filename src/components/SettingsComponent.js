import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import UPDATE_VARIABLE_MUTATION from '../graphql/queries/UPDATE_VARIABLE_MUTATION';
import VARIABLE_QUERY from '../graphql/queries/VARIABLE_QUERY';

// eslint-disable-next-line react/prop-types
function SettingsComponent({ value }) {
    const [updateVariable] = useMutation(UPDATE_VARIABLE_MUTATION, {
        variables: { value },
        update: (cache) => {
            const data = cache.readQuery({
                query: VARIABLE_QUERY,
            });

            const dataClone = {
                ...data,
                variable: {
                    ...data.variable,
                    value,
                },
            };

            cache.writeQuery({
                query: VARIABLE_QUERY,
                data: dataClone,
            });
        },
    });
    return (
        <div style={{ marginTop: '10px', marginBottom: '30px' }}>
            <Button variant="outlined" color="primary" onClick={updateVariable}>
                Change color
            </Button>
        </div>
    );
}

export default SettingsComponent;
