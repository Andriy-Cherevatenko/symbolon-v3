import React from 'react';
import Reducer from '../reducers';
import Immutable from 'immutable';
import Articles from '../components/Articles';
import ACTIONS from '../actions';

describe('menuReducer:', () => {
    const initialState = Immutable.Map({
        article: <Articles.BlankPage />,
        selectedCards: [],
    });

    it('should return the initial state', () => {
        const initialStateToBeTested = Reducer(undefined, {});
        
        expect(initialStateToBeTested).toEqual(initialState);
    });
   
        let nextState = undefined;
        let zodiacName = "Aries";
        it(`should handle action "SELECT_ZODIAC_SIGN" with payload "${zodiacName}" correctly`, () => {
            nextState = Reducer(initialState, {
                type: ACTIONS.SELECT_ZODIAC_SIGN,
                zodiacName,
            });

            expect(nextState.get('selectedCards')).toEqual([zodiacName]);
            expect(nextState.get('article').type.displayName).toEqual(zodiacName);
         
    });
});
