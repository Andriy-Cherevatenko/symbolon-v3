import gql from 'graphql-tag';

const VARIABLE_QUERY = gql`
    query variable {
        variable @client {
            id
            name
            value
        }
    }
`;

export default VARIABLE_QUERY;
