import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';
//import { fireEvent, render } from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock('../../graphql/hooks');
jest.mock('classnames');

const mockupdCards = jest.fn();
// eslint-disable-next-line no-unused-vars
const updCards = mockupdCards;

const mockonClick = jest.fn();
// eslint-disable-next-line no-unused-vars
const onClick = mockonClick;

describe('Menu Item Unit tests:', () => {
    const selected = true;
    const zodiacName = 'Aries';
    const zodiacSign = 'aries.svg';

    const menuItem = mount(
        <MenuItem
            selected={selected}
            zodiacName={zodiacName}
            zodiacSign={zodiacSign}
        />
    ).find(MenuItem);

    it('tests Menu Item rendering', () => {
        expect(menuItem).toBeTruthy();
    });

    // it('tests onClick event for MenuItem Component', () => {
    //     menuItem.simulate('click');

    //     expect(mockonClick).toHaveBeenCalledTimes(1);
    // });

    // it('tests onClick event for MenuItem Component using TEST LIB/REACT', () => {
    //     const { getByTestId } = render(
    //         <MenuItem
    //             selected={selected}
    //             zodiacName={zodiacName}
    //             zodiacSign={zodiacSign}
    //         />
    //     );
    //     const menuItem = getByTestId('menuitem');

    //     mockUpdCards.mockClear(); // reset num of calls of useDispatch
    //     fireEvent.click(menuItem);
    //     expect(mockUpdCards).toHaveBeenCalledTimes(1);
    // });
});
