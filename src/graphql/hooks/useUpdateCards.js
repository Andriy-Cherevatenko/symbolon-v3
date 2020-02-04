import { useMutation } from '@apollo/react-hooks';
import UPDATE_CARDS_MUTATION from '../../graphql/queries/UPDATE_CARDS_MUTATION';
import SYMBOLON_QUERY from '../queries/SYMBOLON_QUERY';
import ZODIAC from '../../constants/constants';

const useUpdateCards = (zodiacName) => {
    //https://www.apollographql.com/docs/tutorial/mutations/
    const [updateCards] = useMutation(UPDATE_CARDS_MUTATION, {
        //const [updateCards, { data }] = useMutation(UPDATE_CARDS_MUTATION, {
        variables: {},
        update: (cache) => {
            const oldcache = cache.readQuery({
                query: SYMBOLON_QUERY,
            });

            // reducer logic____________________
            let nextCards = [...oldcache.symbolon.selectedCards];
            let nextArticle = oldcache.symbolon.article;

            const currentIndex = nextCards.indexOf(zodiacName);

            switch (nextCards.length) {
                case 0: // if no card selected yet
                    nextCards.push(zodiacName); // push first card
                    nextArticle = ZODIAC[nextCards[0]].articles[nextCards[0]]; //next article is based on 1st element of cards array
                    break;
                case 1: // if one card selected
                    if (currentIndex === -1) {
                        //check if new one is already selected?
                        nextCards.push(zodiacName); // if no - push it to array of selected cards
                        if (ZODIAC[nextCards[0]].id > ZODIAC[nextCards[1]].id) {
                            //swap cards if needed
                            nextCards = [nextCards[1], nextCards[0]];
                        }
                        nextArticle = ZODIAC[nextCards[0]].articles[nextCards[1]]; //next article is based on two cards selected
                    } else {
                        nextCards.splice(currentIndex, 1); // if yes - remove selected card from array
                        nextArticle = 'BlankPage'; //article is blank
                    }
                    break;
                case 2: // if already two cards in array
                    if (currentIndex === -1) {
                        //if new one is not in array, so
                        nextCards.length = 0; // empty array
                        nextCards.push(zodiacName); // push this card to array
                    } else {
                        nextCards.splice(currentIndex, 1); //if yes - remove clicked card from array
                    }
                    nextArticle = ZODIAC[nextCards[0]].articles[nextCards[0]]; //render only one card
                    break;
                default:
                    break;
            }

            //end of reducer logic____________________________

            //https://dev.to/mattdionis/move-over-redux-apollo-client-as-a-state-management-solution-with-hooks-10jc

            const dataClone = {
                ...oldcache,
                symbolon: {
                    ...oldcache.symbolon,
                    article: nextArticle,
                    selectedCards: nextCards,
                },
            };

            cache.writeQuery({
                query: SYMBOLON_QUERY,
                data: dataClone,
            });
        },
    });

    return updateCards;
};

export default useUpdateCards;
