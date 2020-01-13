import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from '../../reducers/';
import Page from './Page';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Page component tests:', () => {
    const store = createStore(Reducer);
    const connectedPage = shallow(
        <Provider store={store}>
            <Page />
        </Provider>
    );
    const page = connectedPage.find(Page);
   
    test('Page renders without errors and output isn`t undefined/null', () => {
        expect(page).toBeTruthy();
    });
});