import React, { memo } from 'react';
import './MenuItem.less';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import ACTIONS from './../../actions';

const MenuItem = memo(({ zodiacName, zodiacSign, selected }) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch({
            type: ACTIONS.SELECT_ZODIAC_SIGN,
            zodiacName,
        });
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
