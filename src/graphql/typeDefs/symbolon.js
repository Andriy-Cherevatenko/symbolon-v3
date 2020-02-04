import gql from 'graphql-tag';

const typeDefs = gql`
    type SymbolonType {
        id: Int!
        name: String!
        article: String!
        selectedCards: String!
    }
    type Query {
        symbolon: SymbolonType!
    }
    type Mutation {
        updateCards: SymbolonType!
    }
`;

export default typeDefs;
