import gql from 'graphql-tag';

const UPDATE_CARDS_MUTATION = gql`
    mutation updateCards {
        updateCards @client
    }
`;

export default UPDATE_CARDS_MUTATION;
