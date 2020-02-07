import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('./graphql/hooks');

jest.mock('@apollo/react-hooks', () => ({
    useQuery: () => {
        return {
            loading: true,
        };
    },
}));

describe('App component tests:', () => {
    const app = mount(<App />);
    it('tests App Component rendering', () => {
        expect(app.html()).toEqual('<div>Loading...</div>');
    });
});
