import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes.js';

const initialState = {
  apiData:[],
};

// const apiAsyncData = createAsyncThunk(types.CREATE_APIDATA, async (species) => {
//   try {
//     const response = await fetch(`/api/plants/${species}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('Error fetch API data');
//   }
// });

const apiReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.FETCH_PLANT, (state, action) => {
      state.apiData = action.payload.data;
    })
    .addCase(types.SELECT_API, (state, action) => {
      for (let i=0; i<state.apiData; i++){
        if (state.apiData[i].scientific_name===action.payload.species){
          state.apiData=state.apiData.slice(i, i+1)
        }
      }
    })   
  }
)

export default apiReducer;
