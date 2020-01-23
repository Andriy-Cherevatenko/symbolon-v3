import gql from 'graphql-tag';

const UPDATE_VARIABLE_MUTATION = gql`
    mutation updateVariable($value: String!) {
        updateVariable(value: $value) @client
    }
`;

export default UPDATE_VARIABLE_MUTATION;
