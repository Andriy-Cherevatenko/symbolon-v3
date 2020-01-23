import React, { memo } from 'react';
import './MenuItem.less';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { useDispatch } from 'react-redux';
// import ACTIONS from './../../actions';
// import SELECT_ZODIAC_SIGN from '../../graphql/SELECT_ZODIAC_SIGN';
//import VARIABLE_QUERY from '../graphql/VARIABLE_QUERY';
// import { useMutation } from '@apollo/react-hooks';

const MenuItem = memo(({ zodiacName, zodiacSign, selected }) => {
    const onClick = () => {};

    // dispatch({
    //     type: ACTIONS.SELECT_ZODIAC_SIGN,
    //     zodiacName,
    // });
    // const useSelectZodiacSignHook = (value) => {
    // const [selectZodiacSign] = useMutation(SELECT_ZODIAC_SIGN, {
    //     variables: { value },
    //     update: (cache) => {
    // const data = cache.readQuery({
    //     query: VARIABLE_QUERY,
    // });

    // const dataClone = {
    //     ...data,
    //     variable: {
    //         ...data.variable,
    //         value,
    //     },
    // };

    //             cache.writeQuery({
    //                 // query: VARIABLE_QUERY,
    //                 // data: dataClone,
    //                 data: value,
    //             });
    //         },
    //     });
    // };

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
