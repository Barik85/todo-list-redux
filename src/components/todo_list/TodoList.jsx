import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';
import InlineMessage from '../inline_message/InlineMessage';
import Todo from '../todo/Todo';
import styles from './TodoList.css';
import Container from '../container/Container';
import getVisibleTodos from '../../utils/selectors';

// todos={visibleTodos} onDeleteTodo = {this.deleteTodo} onUpdateTodo={this.updateTodo}

const TodoList = ({todos}) => (
    <Container>
        {todos.length > 0 ? (
            <Masonry
                className={styles.list}
                elementType={'ul'}
            >
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.item}>
                        <Todo {...todo}/>
                    </li>
                ))}
            </Masonry>
            ) : (
                <InlineMessage text="No todos now." />
            )}
    </Container>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
}

const mSTP = state => ({
    todos: getVisibleTodos(state.todos, state.filter)
})

export default connect(mSTP)(TodoList);
