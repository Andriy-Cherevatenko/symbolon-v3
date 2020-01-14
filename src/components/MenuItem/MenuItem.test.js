import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => null,
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

    it('Menu renders without errors and output isn`t undefined/null', () => {
        //console.log(menuItem.debug());
        
        expect(menuItem).toBeTruthy();
    });
});
