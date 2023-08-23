/**
 * ************************************
 *
 * @module plantReducer
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Create the relevant reducers to change, edit, and affect different plant cards. Defunct, can be used if refactoring to redux
 *
 * ************************************
 */

import * as types from '../constants/actionTypes.js';

// manage an initial state
// requires knowing what data fields need to be filled

// Wherever possible, try to put as much of the logic for calculating a new state into the appropriate reducer, rather than in the code that prepares and dispatches the action (like a click handler). This helps ensure that more of the actual app logic is easily testable, enables more effective use of time-travel debugging, and helps avoid common mistakes that can lead to mutations and bugs.

/*
Initial State

Total Cards - 0
Collections Array = []

 */

const initialState = {
  totalPlants: 0,
  plantList: [],
  greenScore: '',
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_PLANT: {
      //We create the mongo object
      //Then take that object into the plant creator

    }
    default: {
      return state;
    }
  }
};

export default plantsReducer;
