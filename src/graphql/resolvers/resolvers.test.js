import resolvers from './resolvers';
import store from '../store';

describe('resolvers tests:', () => {
    const symbolon = resolvers.Query.symbolon;
    const updateCards = resolvers.Mutation.updateCards;

    it('returns ', () => {
        const rezultSymbolon = symbolon();
        expect(rezultSymbolon).toEqual(store.symbolon);
    });

    it('returns ', () => {
        const rezultupdateCards = updateCards();
        expect(rezultupdateCards).toEqual(store);
    });
});
