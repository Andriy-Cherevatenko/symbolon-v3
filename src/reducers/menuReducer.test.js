import React from 'react';
import Reducer from '../reducers';
import Immutable from 'immutable';
import Articles from '../components/Articles';
import ACTIONS from '../actions';
import ZODIAC from '../constants/constants';

describe('menuReducer', () => {
    const initialState = Immutable.Map({
        article: <Articles.BlankPage />,
        selectedCards: [],
    });
    test('should return the initial state', () => {
        const initialStateToBeTested = Reducer(undefined, {});
        expect(initialStateToBeTested).toEqual(initialState);
    });

    Object.keys(ZODIAC).map((zodiacName) => {
        let nextState = undefined;
        test(`should correctly handle action "SELECT_ZODIAC_SIGN" with payload "${zodiacName}"`, () => {
            nextState = Reducer(initialState, {
                type: ACTIONS.SELECT_ZODIAC_SIGN,
                zodiacName: zodiacName,
            });

            expect(nextState.get('selectedCards')).toEqual([zodiacName]);
            expect(nextState.get('article').type.displayName).toEqual(zodiacName);
        });
    });
});
