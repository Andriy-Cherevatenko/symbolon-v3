import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App component tests:', () => {
    const app = shallow(<App />);
    const page = app.find(Page);
    const menu = app.find(Menu);

    it('App renders without errors and output isn`t undefined/null', () => {
        expect(app).toBeTruthy();
    });

    it('App contains one and only one Page component', () => {
        expect(page.length).toBe(1);
    });

    it('App contains one and only one Menu component', () => {
        expect(menu.length).toBe(1);
    });
});
