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
        const paramsString = params.toString();

        if (paramsString.includes('article')) {
            return <div>Aries-Cancer Component</div>;
        } else if (paramsString.includes('selectedCards')) {
            return ['Aries', 'Cancer'];
        } else return {};
    },
}));

describe('App component tests:', () => {
    const app = mount(<App />);
    const page = app.find(Page);
    const menu = app.find(Menu);

    it('tests App Component rendering', () => {
        expect(app).toBeTruthy();
    });

    it('tests if App Component contains only one Page component', () => {
        expect(page.length).toBe(1);
    });

    it('tests if App Component contains only one Menu component', () => {
        expect(menu.length).toBe(1);
    });
});
