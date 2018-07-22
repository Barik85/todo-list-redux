/* eslint-disable */
import { combineReducers } from 'redux';
import todosReducer from './todos';
import filterReducer from './filter';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
})

export default rootReducer;

function combReducers(reducerMapping) {
  return function(state = {}, action) {
    return Object.keys(reducerMapping).reduce((nextState, key) => {
      nextState[key] = reducerMapping[key](state[key], action);
      return nextState;
    }, {})
  };
}
