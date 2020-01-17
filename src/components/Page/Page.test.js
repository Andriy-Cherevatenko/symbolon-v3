import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Page, { getArticle } from './Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => <div>BlankPage Component </div>,
}));

describe('Page Unit test:', () => {
    const page = mount(<Page />).find(Page);

    it('tests Page Component rendering', () => {
        expect(page).toBeTruthy();
    });

    it('tests function of getting state "selectedCards"', () => {
        const state = {
            get: (smth) => smth,
        };
        const article = getArticle(state);
        expect(article).toBe('article');
    });
});
