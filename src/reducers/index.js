import { combineReducers } from 'redux';
import addReducer from './add';

const allReducers = combineReducers({
  addReducer,
});

export default allReducers;
