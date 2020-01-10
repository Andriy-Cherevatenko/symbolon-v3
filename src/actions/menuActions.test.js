import ACTIONS from './menuActions';
import ACTION_CREATORS from './menuActions';

describe('selectZodiacSign', () => {
    test('returns an action with type `SELECT_ZODIAC_SIGN`', () => {
        const zodiacName = 'smth';
        const action = ACTION_CREATORS.selectZodiacSign(zodiacName);
        expect(action).toEqual({
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName
        });
    });
});
