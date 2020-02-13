import SYMBOLON_QUERY from '../queries/SYMBOLON_QUERY';
import symbolonReducer from '../../graphql/reducers';

const symbolonCacheUpdater = (cache, zodiacName) => {
    try {
        // cache update procedure
        //https://dev.to/mattdionis/move-over-redux-apollo-client-as-a-state-management-solution-with-hooks-10jc

        //create copy of current value from cache

        const oldcache = cache.readQuery({
            query: SYMBOLON_QUERY,
        });

        let nextCards = [...oldcache.symbolon.selectedCards];
        let nextArticle = oldcache.symbolon.article;

        // reducer logic_______ define new Cards and Article
        nextArticle = symbolonReducer(nextCards, nextArticle, zodiacName);

        // Append new object value to old one
        const dataClone = {
            ...oldcache,
            symbolon: {
                ...oldcache.symbolon,
                article: nextArticle,
                selectedCards: nextCards,
            },
        };

        // write data back to cache
        cache.writeQuery({
            query: SYMBOLON_QUERY,
            data: dataClone,
        });
    } catch (e) {
        console.err(e);
    }
};

export default symbolonCacheUpdater;
