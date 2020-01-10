import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App component testing', () => {
    const wrapper = shallow(<App />);
    test('App renders without errors and output isn`t undefined/null', () => {
        expect(wrapper).toBeTruthy();
    });
    test('App contains one and only one Page component', () => {
        const page = wrapper.find(Page);
        expect(page.length).toBe(1);
    });
    test('App contains one and only one Menu component', () => {
        const menu = wrapper.find(Menu);
        expect(menu.length).toBe(1);
    });
});
