import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.css';

const Container = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.shape(),
    PropTypes.any,
  ]),
}

Container.defaultProps = {
  children: {},
}

export default Container;
