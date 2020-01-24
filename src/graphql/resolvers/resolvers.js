import state from '../../state';

const resolvers = {
    Query: {
        article: () => state.article,
        selectedCards: () => state.selectedCards,
        articleSelectedCards: () => state.articleSelectedCards,
    },
    Mutation: {
        updateArticle: (_, { value }) => {
            // console.log('Resolver, value = ', value);
            state.article.value = value;
            return state.article;
        },
        updateCards: (_, { cards, article }) => {
            state.selectedCards.value = cards;
            state.article.value = article;
            return state;
        },
    },
};

export default resolvers;
