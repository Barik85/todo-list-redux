import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './TodoFilter.css';
import changeFilter from '../../redux/actions/filter';

const TodoFilter = ({currentFilter, onChange}) => (
  <form>
    <input
      type="text"
      value={currentFilter}
      onChange={e => {onChange(e.target.value)}}
      placeholder="find note"
      className={styles.filter_input}
    />
  </form>
);

TodoFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
}

const mSTP = state => ({
 currentFilter: state.filter
})

const mDTP = dispatch => ({
  onChange: (filter) => dispatch(changeFilter(filter))
})

export default connect(mSTP, mDTP)(TodoFilter);
