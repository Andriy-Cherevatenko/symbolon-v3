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
        value: String!
    }
    type ArticleSelectedCardsType {
        id: Int!
        article: String!
        selectedCards: SelectedCardsType!
    }
    type Query {
        variable: VariableType!
        article: ArticleType!
        selectedCards: SelectedCardsType!
        articleSelectedCards: ArticleSelectedCardsType!
    }
    type Mutation {
        updateVariable(value: String!): VariableType!
        selectZodiacSign(value: String!): ArticleSelectedCardsType!
    }
`;

export default typeDefs;
