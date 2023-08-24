
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';

// Same as other Redux components, set up but unused.
const store = createStore(reducers, composeWithDevTools());

export default store;
