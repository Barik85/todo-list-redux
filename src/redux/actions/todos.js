import {v4} from 'uuid';
import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from './types';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {id: v4(), title, completed: false},
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = ({id, title}) => ({
  type: UPDATE_TODO,
  payload: {id, title}
})
