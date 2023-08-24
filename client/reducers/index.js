
import { combineReducers } from 'redux';

import plantReducer from './plantReducers.js';
import apiReducer from './APIReducers.js';


const reducers = combineReducers({
  api: apiReducer,
  plants: plantReducer,
});

export default reducers;
