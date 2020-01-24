import gql from 'graphql-tag';

const UPDATE_CARDS_MUTATION = gql`
    mutation updateCards($value: String!) {
        updateCards(value: $value) @client
    }
`;

export default UPDATE_CARDS_MUTATION;
