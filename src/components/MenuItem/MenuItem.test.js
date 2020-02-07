import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';
import { fireEvent, render } from '@testing-library/react';
import useUpdateCards from '../../graphql/hooks';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('classnames');
jest.mock('../../graphql/hooks');

describe('Menu Item Unit tests:', () => {
    it('tests onClick event for MenuItem Component', () => {
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

        menuItem.simulate('click');
        expect(menuItem).toBeTruthy();
        expect(useUpdateCards).toHaveBeenCalledTimes(1);
    });

    it('tests onClick event for MenuItem Component using TEST LIB/REACT', () => {
        const selected = true;
        const zodiacName = 'Aries';
        const zodiacSign = 'aries.svg';

        const { getByTestId } = render(
            <MenuItem
                selected={selected}
                zodiacName={zodiacName}
                zodiacSign={zodiacSign}
            />
        );
        const menuItem = getByTestId('menuitem');

        fireEvent.click(menuItem);
        expect(useUpdateCards).toHaveBeenCalledTimes(2);
    });
});
