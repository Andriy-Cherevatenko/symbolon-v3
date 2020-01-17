import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Page from './Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: (f) => {
        return f({
            get: () => {
                return <div>BlankPage Component</div>;
            },
        });
    },
}));

describe('Page Unit test:', () => {
    it('tests if Page Component contains BlankPage', () => {
        const page = mount(<Page />);
        expect(page.text()).toBe('BlankPage Component');
    });
});
