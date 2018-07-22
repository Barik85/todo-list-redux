import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ onClick, layout, type, children }) => (
    <button onClick={onClick} className={styles[layout]} type={type}>
        {children}
    </button>
);


Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.func),
        PropTypes.shape(),
        PropTypes.any,
      ]),
    layout: PropTypes.string,
    type: PropTypes.string,
}

Button.defaultProps = {
    disabled: false,
    children: {},
    layout: 'button',
    onClick: () => {},
    type: 'button',
}


export default Button;
