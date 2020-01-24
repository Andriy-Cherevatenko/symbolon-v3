import React, { memo } from 'react';
import './MenuItem.less';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SELECT_ZODIAC_SIGN from '../../graphql/queries/SELECT_ZODIAC_SIGN';
import ARTICLE_SELECTED_CARDS_QUERY from '../../graphql/queries/ARTICLE_SELECTED_CARDS_QUERY';

import { useMutation } from '@apollo/react-hooks';

const MenuItem = memo(({ zodiacName, zodiacSign, selected }) => {
    // const [selectZodiacSign] = useMutation(SELECT_ZODIAC_SIGN, {
    //     variables: { zodiacName },
    // });

    const [selectZodiacSign] = useMutation(SELECT_ZODIAC_SIGN, {
        variables: { zodiacName },
        update: (cache) => {
            console.log('click', zodiacName);
            //return cache;

            // const data = cache.readQuery({
            //     query: ARTICLE_SELECTED_CARDS_QUERY,
            // });

            // const dataClone = {
            //     ...data,
            //     //     variable: {
            //     //         ...data.variable,
            //     //         zodiacName,
            //     //     },
            // };

            // cache.writeQuery({
            //     query: ARTICLE_SELECTED_CARDS_QUERY,
            //     data: dataClone,
            // });
        },
    });

    const menuItemClasses = classNames('menuitem-centered', { selected });

    return (
        <div
            data-testid="menuitem"
            onClick={(e) => {
                e.preventDefault();
                selectZodiacSign({ variables: { value: zodiacName } });
            }}
            className={menuItemClasses}
        >
            <img src={zodiacSign} alt={zodiacSign} />
        </div>
    );
});

MenuItem.propTypes = {
    zodiacName: PropTypes.string,
    zodiacSign: PropTypes.string,
    selected: PropTypes.bool,
};

export default MenuItem;
