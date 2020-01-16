import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

describe('Menu Item Unit tests:', () => {
    const selected = true;
    const zodiacName = 'Aries';
    const zodiacSign = 'aries.svg';

    const menuItem = mount(
        <MenuItem
            selected={selected}
            zodiacName={zodiacName}
            zodiacSign={zodiacSign}
        />
    ).find(MenuItem);

    it('Menu Item renders without errors and output isn`t undefined/null', () => {
        expect(menuItem).toBeTruthy();
    });

    it('Menu Item renders without errors and output isn`t undefined/null', () => {
        menuItem.simulate('click');
        // expect(jest.mock.useDispatch.calls.length).toEqual(1);
        // expect(page.containsMatchingElement(AriesComponent)).toEqual(true);
    });
});
