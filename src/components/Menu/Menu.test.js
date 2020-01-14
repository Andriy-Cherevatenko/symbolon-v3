import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Menu from './Menu';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ['Aries', 'Cancer'],
}));

describe('Menu Unit tests:', () => {
    const menu = mount(<Menu />).find(Menu);

    it('Menu renders without errors and output isn`t undefined/null', () => {
        //console.log(menu.debug());
        expect(menu).toBeTruthy();
    });
});
