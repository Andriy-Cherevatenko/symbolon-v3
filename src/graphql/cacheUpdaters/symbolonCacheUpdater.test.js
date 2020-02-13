import symbolonCacheUpdater from './symbolonCacheUpdater';

describe('cache Updater tests:', () => {
    it(`should properly change the cache object`, () => {
        let cache = {
            symbolon: {
                id: 1,
                name: 'symbolon',
                article: 'BlankPage',
                selectedCards: [],
                __typename: 'symbolon',
            },
            readQuery: () => {
                return {
                    symbolon: {
                        id: 1,
                        name: 'symbolon',
                        article: 'BlankPage',
                        selectedCards: [],
                        __typename: 'symbolon',
                    },
                };
            },
            writeQuery: ({ data: { symbolon } }) => {
                cache = {
                    ...cache,
                    symbolon: {
                        ...cache.symbolon,
                        article: symbolon.article,
                        selectedCards: symbolon.selectedCards,
                    },
                };

                return null;
            },
        };

        symbolonCacheUpdater(cache, 'Aries');
        expect(cache.symbolon.article).toEqual('Aries');
        expect(cache.symbolon.selectedCards).toEqual(['Aries']);
    });
});
