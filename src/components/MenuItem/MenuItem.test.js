import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';
import { fireEvent, render } from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch,
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

    it('tests Menu Item rendering', () => {
        expect(menuItem).toBeTruthy();
    });

    it('tests onClick event for MenuItem Component', () => {
        menuItem.simulate('click');

        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it('tests onClick event for MenuItem Component', () => {
        const { getByTestId } = render(
            <MenuItem
                selected={selected}
                zodiacName={zodiacName}
                zodiacSign={zodiacSign}
            />
        );
        const menuItem2 = getByTestId('menuitem');

        mockDispatch.mockClear(); // reset num of calls of useDispatch
        fireEvent.click(menuItem2);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
});
