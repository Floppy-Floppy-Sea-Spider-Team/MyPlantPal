
import * as types from '../constants/actionTypes.js';
import {createAsyncThunk, createReducer} from '@reduxjs/toolkit'

const initialState = {
  totalPlants: 0,
  plantList: [],
};

const plantsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(types.CREATE_PLANT, (state, action)=>{
      state.totalPlants++;
      const {name, species, lastWatered, lastPotted, cycle, watering, sunlight, image} = action.payload;
      const plantCard={
        name: name,
        species: species,
        lastPotted: lastPotted,
        lastWatered: lastWatered,
        frequency: watering,
        cycle: cycle,
        sunlight: sunlight[0],
        photo: image,
      }
      state.plantList.push(plantCard)
    })
    .addCase(types.LOAD_PLANT, (state, action)=>{
      for (let i=0; i<action.payload.plants.length; i++){
        state.totalPlants++;
        state.plantList.push(action.payload.plants[i]);
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
