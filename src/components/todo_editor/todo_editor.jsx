import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './todo_editor.css';


const INITIAL_STATE = '';

export default class TodoEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  state = { ...INITIAL_STATE };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value});
  }

  resetState = () => {
    this.setState({...INITIAL_STATE})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === '') return;

    this.props.onSave(this.state.text);
    this.resetState();
  }

  render() {
    const {text} = this.state;
    const {onCancel} = this.props;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <textarea
          name="text"
          placeholder="add something"
          className={styles.text_input}
          value={text}
          onChange={this.handleInputChange}
        />
        <div className={styles.actions}>
          <Button type="submit">Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
      </form>
    )
  }
}
