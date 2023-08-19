import { combineReducers } from 'redux';

// import all reducers here
import plantReducer from './plantReducers';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  plants: plantReducer,
});

// make the combined reducers available for import
export default reducers;