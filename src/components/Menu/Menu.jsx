import React, { memo } from 'react';
import './Menu.less';
import MenuItem from '../MenuItem/MenuItem';
import ZODIAC from '../../constants/constants';
import { useQuery } from '@apollo/react-hooks';
import SELECTED_CARDS_QUERY from '../../graphql/queries/SELECTED_CARDS_QUERY';
import zodiacSignResolver from '../../utils/zodiacSignResolver';

const Menu = memo(() => {
    const { loading, data } = useQuery(SELECTED_CARDS_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const selectedCards = data.selectedCards.value;
    return (
        <div className="menu-wrapper">
            {Object.keys(ZODIAC).map((item) => (
                <MenuItem
                    selected={selectedCards.indexOf(item) > -1}
                    key={item}
                    zodiacName={item}
                    zodiacSign={zodiacSignResolver(item)}
                />
            ))}
        </div>
    );
});

export default Menu;
