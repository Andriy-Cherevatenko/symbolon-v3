const ACTIONS = {
    SELECT_ZODIAC_SIGN: 'SELECT_ZODIAC_SIGN',
};

const ACTION_CREATORS = {
    selectZodiacSign: (zodiacName) => {
        return {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        };
    },
};

export default Object.assign(ACTION_CREATORS, ACTIONS);
