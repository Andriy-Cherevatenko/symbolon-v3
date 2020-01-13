import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducers';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('App component tests:', () => {
    const app = shallow(<App />);
    const store = createStore(Reducer);
    const connectedPage = shallow(
        <Provider store={store}>
            <Page />
        </Provider>
    );
    const page = connectedPage.find(Page);

    const connectedMenu = shallow(
        <Provider store={store}>
            <Menu />
        </Provider>
    );
    const menu = connectedMenu.find(Menu);

    test('App renders without errors and output isn`t undefined/null', () => {
        console.log('App contains:\n', app.debug());
        expect(app).toBeTruthy();
    });
    test('Page contains one and only one Page component', () => {
        console.log('Page contains:\n', page.debug());
        expect(page.length).toBe(1);
    });
    test('Menu contains one and only one Menu component', () => {
        console.log('Menu contains:\n', menu.debug());
        expect(menu.length).toBe(1);
    });
});
