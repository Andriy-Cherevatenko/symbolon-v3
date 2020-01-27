import store from '../store';

const resolvers = {
    Query: {
        article: () => store.article,
        selectedCards: () => store.selectedCards,
    },
    Mutation: {
        updateCards: (_, { cards, article }) => {
            store.selectedCards.value = cards;
            store.article.value = article;
            return store;
        },
    },
};

export default resolvers;
