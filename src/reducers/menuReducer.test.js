import React from 'react';
import Reducer from '../reducers';
import Immutable from 'immutable';
import Articles from '../components/Articles';
import ACTIONS from '../actions';

describe('menuReducer:', () => {
    it('should return the initial state', () => {
        const initialState = Immutable.Map({
            article: <Articles.BlankPage />,
            selectedCards: [],
        });
        const initialStateToBeTested = Reducer(undefined, {});

        expect(initialStateToBeTested).toEqual(initialState);
    });

    it(`should handle payload "Aries" correctly (array is empty)`, () => {
        const zodiacName = 'Aries';
        const initialState = Immutable.Map({
            article: <Articles.BlankPage />,
            selectedCards: [],
        });
        const nextState = Reducer(initialState, {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });

        expect(nextState.get('selectedCards')).toEqual([zodiacName]);
        expect(nextState.get('article').type.displayName).toEqual(zodiacName);
    });

    it(`should handle payload "Aries" correctly (Aries already in array)`, () => {
        const zodiacName = 'Aries';
        const initialState = Immutable.Map({
            article: <Articles.Aries />,
            selectedCards: ['Aries'],
        });
        const nextState = Reducer(initialState, {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });

        expect(nextState.get('selectedCards')).toEqual([]);
        expect(nextState.get('article').type.displayName).toEqual('BlankPage');
        //console.log('array', nextState.get('selectedCards'));
        //console.log('displayName', nextState.get('article').type.displayName);
    });

    it(`should handle payload "Aries" correctly (Taurus in array)`, () => {
        const zodiacName = 'Aries';
        const initialState = Immutable.Map({
            article: <Articles.Taurus />,
            selectedCards: ['Taurus'],
        });
        const nextState = Reducer(initialState, {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });

        //console.log('array', nextState.get('selectedCards'));
        //console.log('displayName', nextState.get('article').type.displayName);

        expect(nextState.get('selectedCards')).toEqual([zodiacName, 'Taurus']);
        expect(nextState.get('article').type.displayName).toEqual('AriesTaurus');
    });

    it(`should handle payload "Aries" correctly (Aries and Taurus in array)`, () => {
        const zodiacName = 'Aries';
        const initialState = Immutable.Map({
            article: <Articles.AriesTaurus />,
            selectedCards: ['Aries', 'Taurus'],
        });
        const nextState = Reducer(initialState, {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });

        //console.log('array', nextState.get('selectedCards'));
        //console.log('displayName', nextState.get('article').type.displayName);

        expect(nextState.get('selectedCards')).toEqual(['Taurus']);
        expect(nextState.get('article').type.displayName).toEqual('Taurus');
    });

    it(`should handle payload "Taurus" correctly (Aries and Taurus in array)`, () => {
        const zodiacName = 'Taurus';
        const initialState = Immutable.Map({
            article: <Articles.AriesTaurus />,
            selectedCards: ['Aries', 'Taurus'],
        });
        const nextState = Reducer(initialState, {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });

        //console.log('array', nextState.get('selectedCards'));
        //console.log('displayName', nextState.get('article').type.displayName);

        expect(nextState.get('selectedCards')).toEqual(['Aries']);
        expect(nextState.get('article').type.displayName).toEqual('Aries');
    });

    it(`should handle payload "Cancer" correctly (Aries and Taurus in array)`, () => {
        const zodiacName = 'Cancer';
        const initialState = Immutable.Map({
            article: <Articles.AriesTaurus />,
            selectedCards: ['Aries', 'Taurus'],
        });
        const nextState = Reducer(initialState, {
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });

        //console.log('array', nextState.get('selectedCards'));
        //console.log('displayName', nextState.get('article').type.displayName);

        expect(nextState.get('selectedCards')).toEqual(['Cancer']);
        expect(nextState.get('article').type.displayName).toEqual('Cancer');
    });
});
