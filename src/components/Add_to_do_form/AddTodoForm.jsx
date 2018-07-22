import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './AddTodoForm.css';

const INITIAL_STATE = {
    title: '',
}

export default class AddTodoForm extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        onCancel: PropTypes.func,
    }

    static defaultProps = {
        onCancel: () => {},
    }
    state = { ...INITIAL_STATE }

    handleFormSubmit = e => {
        e.preventDefault();

        if (this.state.title === '') return;

        this.props.onSave(this.state.title);

        this.setState({...INITIAL_STATE});
    }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }

    render() {
        const {title} = this.state;
        const {onCancel} =this.props;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <textarea
                        type="text"
                        name="title"
                        placeholder="Enter text"
                        value={title}
                        onChange={this.handleInputChange}
                        className={styles.text_input}
                    />
                </div>
                <div className={styles.buttons_box}>
                <Button layout="dark" type="submit">Add todo</Button>
                <Button onClick={onCancel}>Cancel</Button>
                </div>
            </form>

        );
    }
}
