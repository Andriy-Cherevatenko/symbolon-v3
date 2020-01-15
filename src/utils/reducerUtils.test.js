import utils from './reducerUtils';

describe('Reducer Utils tests:', () => {
    it('returns state correctly if initial state = {}', () => {
        const initialState = {};
        const action = {
            type: 'smth',
        };

        const Reducer = utils.createReducer();
        const resultReducer = Reducer(initialState, action);

        expect(resultReducer).toEqual({});
    });
});
