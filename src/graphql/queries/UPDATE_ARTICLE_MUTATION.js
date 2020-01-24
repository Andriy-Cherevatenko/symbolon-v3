import gql from 'graphql-tag';

const UPDATE_ARTICLE_MUTATION = gql`
    mutation updateArticle($value: String!) {
        updateArticle(value: $value) @client
    }
`;

export default UPDATE_ARTICLE_MUTATION;
