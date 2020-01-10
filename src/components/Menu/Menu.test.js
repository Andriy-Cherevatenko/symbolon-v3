import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Menu from './Menu';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from '../../reducers/';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Menu component tests:', () => {
    const store = createStore(Reducer);
    const connectedMenu = shallow(
        <Provider store={store}>
            <Menu />
        </Provider>
    );
    const menu = connectedMenu.find(Menu);

    test('Menu renders without errors and output isn`t undefined/null', () => {
        expect(menu).toBeTruthy();
    });
});
