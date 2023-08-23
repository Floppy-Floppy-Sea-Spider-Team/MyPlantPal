/**
 * ************************************
 *
 * @module store.js
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Central source of all state. Unused, was there in case we attempted to refactor to redux
 *
 * ************************************
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';

// Same as other Redux components, set up but unused.
const store = createStore(reducers, composeWithDevTools());

export default store;
