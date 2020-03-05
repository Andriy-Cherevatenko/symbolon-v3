import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Page from './Page';
import articleResolver from '../../constants/articleResolver';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Page Unit test:', () => {
    it('tests if Page Component contains BlankPage', () => {
        const page = mount(<Page article={articleResolver['BlankPage']} />);
        expect(page).toBeTruthy();
    });
});
