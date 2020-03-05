import React, { memo } from 'react';
import './MenuItem.less';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useUpdateCards from '../../graphql/hooks';

const MenuItem = memo(({ zodiacName, zodiacSign, selected }) => {
    const updCards = useUpdateCards(zodiacName);
    const menuItemClasses = classNames('menuitem-centered', { selected });
    return (
        <img
            src={zodiacSign}
            alt={zodiacSign}
            data-testid="menuitem"
            onClick={updCards}
            className={menuItemClasses}
        />
    );
});

MenuItem.propTypes = {
    zodiacName: PropTypes.string,
    zodiacSign: PropTypes.string,
    selected: PropTypes.bool,
};

export default MenuItem;
