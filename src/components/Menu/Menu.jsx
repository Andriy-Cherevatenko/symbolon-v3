import React, { memo } from 'react';
import './Menu.less';
import MenuItem from '../MenuItem/MenuItem';
import ZODIAC from '../../constants/constants';
import { useQuery } from '@apollo/react-hooks';
import SELECTED_CARDS_QUERY from '../../graphql/queries/SELECTED_CARDS_QUERY';
import ARTICLE_SELECTED_CARDS_QUERY from '../../graphql/queries/ARTICLE_SELECTED_CARDS_QUERY';

const Menu = memo(() => {
    const { loading, data } = useQuery(ARTICLE_SELECTED_CARDS_QUERY);
    if (loading) return <h2>Loading...</h2>;
    //const selectedCards = data.selectedCards.value;

    const selectedCards = data.articleSelectedCards.selectedCards;

    console.log(selectedCards);
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
