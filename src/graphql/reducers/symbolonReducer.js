import ZODIAC from '../../constants/constants';

const symbolonCacheUpdater = (nextCards, nextArticle, zodiacName) => {
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
    return nextArticle;
    //end of reducer logic____________________________
};

export default symbolonCacheUpdater;
