import gql from 'graphql-tag';

const SELECTED_CARDS_QUERY = gql`
    query selectedCards {
        selectedCards @client {
            name
            value
        }
    }
`;

export default SELECTED_CARDS_QUERY;
