import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Button/Button.css';


export default class EditableInput extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onEditSuccess: PropTypes.func.isRequired,
        onEditAbort: PropTypes.func.isRequired,
    }
    state = { text: this.props.text }

    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }

    handleEditSucces = (e) => {
        e.preventDefault();

        this.props.onEditSuccess(this.state.text);
        this.setState({text: ''});
    }

    render() {
        const {text} = this.state;
        return (
            <form onSubmit={this.handleEditSucces} >
                <button className={styles.button} type="submit">Save</button>
                <button className={styles.disabled} onClick={this.props.onEditAbort}>Cancel</button>
                <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }
}
