import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditableInput from '../EditableInput';
import Button from '../Button/Button';
import todoStyles from './Todo.css';
import { deleteTodo, updateTodo } from '../../redux/actions/todos';



class Todo extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        onDeleteTodo: PropTypes.func.isRequired,
        onUpdateTodo: PropTypes.func.isRequired
    }

    state = {
        isEdite: false
    }

    onEditStart = () => {
        this.setState({isEdite: true});
    }

    onEditEnd = () => {
        this.setState({isEdite: false});
    }

    handleDeleteTodo = () => this.props.onDeleteTodo(this.props.id);

    handleUpdate = (title) => {
        console.log({id: this.props.id, title});
        this.props.onUpdateTodo({id: this.props.id, title});
        this.onEditEnd();
    }

    render() {
        const {title} = this.props;
        const {isEdite} = this.state;

        return (
            <div>

                {isEdite ?
                    (
                        <EditableInput
                            text={title}
                            onEditSuccess={this.handleUpdate}
                            onEditAbort={this.onEditEnd}
                        />
                    ) : (
                        <div className={todoStyles.box}>
                            <div>{title}</div>
                            <div className={todoStyles.btns_box}>
                                <Button  onClick={this.handleDeleteTodo}>Delete</Button>
                                <Button onClick= {this.onEditStart}>Edit</Button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }

};

const mDTP = dispatch => ({
    onDeleteTodo: id => dispatch(deleteTodo(id)),
    onUpdateTodo: (editItem) => dispatch(updateTodo(editItem))
})

export default connect(null, mDTP)(Todo);
