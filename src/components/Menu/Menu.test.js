import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Menu from './Menu';

Enzyme.configure({ adapter: new EnzymeAdapter() });
jest.mock('../../graphql/hooks');
jest.mock('@apollo/react-hooks', () => ({
    useQuery: () => {},
}));

describe('Menu Unit tests:', () => {
    it('renders Menu Component without errors', () => {
        // selectedCards={data.symbolon.selectedCards}
        const menu = mount(<Menu selectedCards={[]} />);
        expect(menu).toBeTruthy();
    });
});

/*
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
*/
