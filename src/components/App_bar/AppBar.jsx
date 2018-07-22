import React from 'react';
import PropTypes from 'prop-types';
import styles from './AppBar.css';
import Container from '../container/Container';

const AppBar = ({children}) => (
  <header className={styles.app_bar}>
    <Container>
      <div className={styles.app_bar_content }>
        {children}
      </div>
    </Container>
  </header>
)

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.shape(),
    PropTypes.any,
  ]),
}

AppBar.defaultProps = {
  children: {}
}

export default AppBar;
