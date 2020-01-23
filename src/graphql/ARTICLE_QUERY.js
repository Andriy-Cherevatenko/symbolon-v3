import gql from 'graphql-tag';

const ARTICLE_QUERY = gql`
    query article {
        article @client {
            name
            value
        }
    }
`;

export default ARTICLE_QUERY;
