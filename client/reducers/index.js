/**
 * ************************************
 *
 * @module index.js
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Use all relevant reducers. Defunct aspect from initial idea to use redux. Left in case anyone wants to refactor the program to use redux
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import plantReducer from './plantReducers.js';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  plants: plantReducer,
});

// make the combined reducers available for import
export default reducers;
