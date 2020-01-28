import gql from 'graphql-tag';

const SYMBOLON_QUERY = gql`
    query symbolon {
        symbolon @client {
            id
            name
            article
            selectedCards
        }
    }
`;

export default SYMBOLON_QUERY;
