import gql from 'graphql-tag';

const typeDefs = gql`
    type ArticleType {
        id: Int!
        name: String!
        value: String!
    }
    type SelectedCardsType {
        id: Int!
        name: String!
        value: [String]!
    }
    type Query {
        article: ArticleType!
        selectedCards: SelectedCardsType!
    }
    type Mutation {
        updateCards(value1: String!, value2: String!): SelectedCardsType!
    }
`;

export default typeDefs;
