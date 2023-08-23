
import * as types from '../constants/actionTypes.js';
import {createAsyncThunk, createReducer} from '@reduxjs/toolkit'
import { selectApiData } from './APIReducers.js';

const initialState = {
  totalPlants: 0,
  plantList: [],
};

const plantsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(types.CREATE_PLANT, (state, action)=>{
      state.plants.totalPlants++;
      const apiData=selectApiData(state)
      const plant=apiData[0]
      const freq = plant.watering
      const cycle= plant.cycle
      const sunlight= plant.sunlight[0]
      const url=plant.default_image.thumbnail
      const species=plant.common_name
      const plantCard={
        name: action.payload.name,
        species: species,
        lastPotted: action.payload.lastPotted,
        lastWatered: action.payload.lastWater,
        WaterFrequency: freq,
        cycle: cycle,
        sunlight: sunlight,
        photo: url,
      }
      state.plants.plantList.push(plantCard)
    })
    .addCase(types.LOAD_PLANT, (state, action)=>{
      for (let i=0; i<action.payload.plants.length; i++){
        state.plants.totalPlants++;
        state.plants.plantList.push(action.payload.plants[i]);
      }
    })
    // .addCase(types.UPDATE_PLANT, (state, action)=>{


    // })
    // .addCase(types.DELETE_PLANT, (state, action)=>{
    //   totalPlants--;

    // });
 
 
 
 
 
  }
)


export default plantsReducer;
