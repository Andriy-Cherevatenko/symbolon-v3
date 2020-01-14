import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Page from './Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => <div>BlankPage Component </div>,
}));

describe('Page Unit tests:', () => {
    const page = mount(<Page />).find(Page);

    it('Page renders without errors and output isn`t undefined/null', () => {
        //console.log(page.debug());
        expect(page).toBeTruthy();
    });
});
