import ACTIONS from './menuActions';
import ACTION_CREATORS from './menuActions';

describe('Action tests:', () => {
    it('returns an action with type "SELECT_ZODIAC_SIGN"', () => {
        const zodiacName = 'smth';
        const action = ACTION_CREATORS.selectZodiacSign(zodiacName);
        const expectedAction = {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        };

        expect(action).toEqual(expectedAction);
    });
});
