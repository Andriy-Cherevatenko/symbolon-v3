import gql from 'graphql-tag';

const ARTICLE_SELECTED_CARDS_QUERY = gql`
    query articleSelectedCards {
        articleSelectedCards @client {
            name
            article
            selectedCards
        }
    }
`;

export default ARTICLE_SELECTED_CARDS_QUERY;
