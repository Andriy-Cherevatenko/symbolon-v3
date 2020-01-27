import store from '../store';

const resolvers = {
    Query: {
        article: () => store.article,
        selectedCards: () => store.selectedCards,
        articleSelectedCards: () => store.articleSelectedCards,
    },
    Mutation: {
        updateArticle: (_, { value }) => {
            store.article.value = value;
            return store.article;
        },
        updateCards: (_, { cards, article }) => {
            store.selectedCards.value = cards;
            store.article.value = article;
            return store;
        },
    },
};

export default resolvers;
