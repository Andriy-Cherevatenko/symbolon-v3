/* eslint-disable react/prop-types */
//https://www.apollographql.com/docs/react/development-testing/testing/
import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItem from '../../components/MenuItem/MenuItem';
import { InMemoryCache } from 'apollo-cache-inmemory';
import resolvers from '../resolvers';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('menuReducer:', () => {
    it(`should use useMutation after click`, () => {
        const selected = false;
        const zodiacName = 'Aries';
        const zodiacSign = 'aries.svg';

        const cache = new InMemoryCache().restore({
            ROOT_QUERY: {
                symbolon: {
                    id: 1,
                    name: 'symbolon',
                    article: 'BlankPage',
                    selectedCards: [],
                    __typename: 'symbolon',
                },
            },
        });

        const menuItem = mount(
            <MockedProvider resolvers={resolvers} cache={cache} addTypename={false}>
                <MenuItem
                    selected={selected}
                    zodiacName={zodiacName}
                    zodiacSign={zodiacSign}
                />
            </MockedProvider>
        ).find(MenuItem);

        menuItem.simulate('click');
        expect(menuItem).toBeTruthy();
    });
});
