import { combineReducers } from 'redux';
import addReducer from './add';
import deleteReducer from './delete';

const allReducers = combineReducers({
  addReducer,
  deleteReducer,
});

export default allReducers;
