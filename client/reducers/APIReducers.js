import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import * as types from '../constants/actionTypes.js';

const initialState = {
  apiData:[],
};

const apiData = createAsyncThunk(types.CREATE_APIDATA, async () => {
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
      .addCase(fetchApiData.fulfilled, (state, action) => {
      //We create the mongo object
      //Then take that object into the plant creator
      state.apiData = action.payload;
      })
  }
)

export default apiReducer;
export const selectApiData = state => state.apiData;