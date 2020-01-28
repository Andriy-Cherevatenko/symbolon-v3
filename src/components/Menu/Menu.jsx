import React, { memo } from 'react';
import './Menu.less';
import MenuItem from '../MenuItem/MenuItem';
import ZODIAC from '../../constants/constants';
import { useQuery } from '@apollo/react-hooks';
import SYMBOLON_QUERY from '../../graphql/queries/SYMBOLON_QUERY';
import zodiacSignResolver from '../../constants/zodiacSignResolver';

const Menu = memo(() => {
    const { loading, data } = useQuery(SYMBOLON_QUERY);
    if (loading) return <h2>Loading...</h2>;
    const selectedCards = data.symbolon.selectedCards;
    return (
        <div className="menu-wrapper">
            {Object.keys(ZODIAC).map((item) => (
                <MenuItem
                    selected={selectedCards.indexOf(item) > -1}
                    key={item}
                    zodiacName={item}
                    zodiacSign={zodiacSignResolver[item]}
                />
            ))}
        </div>
    );
});

export default Menu;
