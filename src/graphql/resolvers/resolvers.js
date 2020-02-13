import store from '../store';

const resolvers = {
    Query: {
        symbolon: () => store.symbolon,
    },
    Mutation: {
        updateCards: () => {
            return store;
        },
    },
};

export default resolvers;
