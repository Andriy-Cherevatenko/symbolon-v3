import React, { memo } from 'react';
import './Menu.less';
import MenuItem from '../MenuItem/MenuItem';
import ZODIAC from '../../constants/constants';
import zodiacSignResolver from '../../constants/zodiacSignResolver';
import PropTypes from 'prop-types';

const Menu = memo((props) => {
    Object.keys(ZODIAC).map((item) => console.log(item, zodiacSignResolver[item]));
    return (
        <div className="menu-wrapper">
            {Object.keys(ZODIAC).map((item) => (
                <MenuItem
                    selected={props.selectedCards.indexOf(item) > -1}
                    key={item}
                    zodiacName={item}
                    zodiacSign={zodiacSignResolver[item]}
                />
            ))}
        </div>
    );
});

Menu.propTypes = {
    selectedCards: PropTypes.array,
};

export default Menu;
