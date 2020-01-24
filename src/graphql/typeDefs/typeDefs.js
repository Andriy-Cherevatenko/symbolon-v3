import gql from 'graphql-tag';

const typeDefs = gql`
    type VariableType {
        id: Int!
        name: String!
        setting: String!
    }
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
        variable: VariableType!
        article: ArticleType!
        selectedCards: SelectedCardsType!
    }
    type Mutation {
        updateVariable(value: String!): VariableType!
        updateArticle(value: String!): ArticleType!
        updateCards(value: String!): SelectedCardsType!
        selectZodiacSign(value: String!): null
    }
`;

export default typeDefs;
