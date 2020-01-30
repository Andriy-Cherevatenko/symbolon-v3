import React, { memo } from 'react';
import './MenuItem.less';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useUpdateCards from '../../graphql/hooks';

const MenuItem = memo(({ zodiacName, zodiacSign, selected }) => {
    const updCards = useUpdateCards(zodiacName);

    const onClick = () => {
        updCards();
    };

    const menuItemClasses = classNames('menuitem-centered', { selected });

    return (
        <div data-testid="menuitem" onClick={onClick} className={menuItemClasses}>
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
