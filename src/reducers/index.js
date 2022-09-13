import { combineReducers } from 'redux';
import todoReducer from './todo';

const allReducers = combineReducers({
  todoReducer,
});

export default allReducers;
