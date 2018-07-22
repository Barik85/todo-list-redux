import {ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../actions/types';

const initialState = [];

export default function todosReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_TODO:
      return [...state, payload];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload);

    case UPDATE_TODO:
      return state.todos.map(todo => todo.id === payload.id ? {...todo, title: payload.title} : todo)

    default:
      return state;
  }
}
