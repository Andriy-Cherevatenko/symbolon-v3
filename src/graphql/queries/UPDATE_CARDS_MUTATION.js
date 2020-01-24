import gql from 'graphql-tag';

const UPDATE_CARDS_MUTATION = gql`
    mutation updateCards($value1: String!, $value2: String!) {
        updateCards(value1: $value1, value2: $value2) @client
    }
`;

export default UPDATE_CARDS_MUTATION;
