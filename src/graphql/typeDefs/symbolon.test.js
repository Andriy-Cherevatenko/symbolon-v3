import gql from 'graphql-tag';
import typeDefs from './symbolon';

describe('resolvers tests:', () => {
    it('returns ', () => {
        expect(typeDefs).toBe(gql`
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
        `);
    });
});
