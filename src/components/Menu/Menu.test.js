import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Menu from './Menu';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: (f) => {
        return f({
            get: () => {
                return ['Aries', 'Cancer'];
            },
        });
    },
}));

describe('Menu Unit tests:', () => {
    it('renders Menu Component without errors', () => {
        const menu = mount(<Menu />);
        expect(menu).toBeTruthy();
    });
});
