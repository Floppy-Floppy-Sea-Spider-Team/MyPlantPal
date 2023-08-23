import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes.js';

const initialState = {
  apiData:[],
};

const apiAsyncData = createAsyncThunk(types.CREATE_APIDATA, async (species) => {
  try {
    const response = await fetch(`/api/plants/${species}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetch API data');
  }
});

const apiReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.FETCH_PLANT, (state, action) => {
      state.api.apiData = action.payload.species;
    })
    .addCase(apiAsyncData.fulfilled, (state, action) => {

      state.api.apiData = action.payload.data;
    })   
  }
)

export default apiReducer;
export const selectApiData = state => state.api.apiData;
export apiAsyncData;