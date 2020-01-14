import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: (params) => {
        //console.log(params.toString());
        switch (params.toString()) {
            case "state => state.get('article')":
                return <div>Aries-Cancer Component </div>;
            case "state => state.get('selectedCards')":
                return ['Aries', 'Cancer'];
        }
    },
}));

describe('App component tests:', () => {
    const app = mount(<App />);
    //console.log(app.debug());
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
