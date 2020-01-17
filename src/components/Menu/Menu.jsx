import React, { memo } from 'react';
import './Menu.less';
import MenuItem from '../MenuItem/MenuItem';
import ZODIAC from '../../constants/constants';
import { useSelector } from 'react-redux';

export const getSelectedCards = (state) => state.get('selectedCards');

const Menu = memo(() => {
    const selectedCards = useSelector(getSelectedCards);
    return (
        <div className="menu-wrapper">
            {Object.keys(ZODIAC).map((item) => (
                <MenuItem
                    selected={selectedCards.indexOf(item) > -1}
                    key={item}
                    zodiacName={item}
                    zodiacSign={ZODIAC[item].sign}
                />
            ))}
       </div>
    );
});

export default Menu;

