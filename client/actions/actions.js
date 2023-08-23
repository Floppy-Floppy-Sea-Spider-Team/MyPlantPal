import * as types from '../constants/actionTypes.js';

export const createPlantActionCreator = () => ({
  type: types.CREATE_PLANT, payload: {
    name: name,
    species: species,
    lastWatered: lastWater,
    lastPotted: lastPotted,
  },
});

export const updatePlantActionCreator = () => ({
  type: types.UPDATE_PLANT, payload: {
    species: species,
  }
});

export const deletePlantActionCreator = () => ({
  type: types.DELETE_PLANT, payload: 'placeholder',
});

export const fetchApiDataActionCreator = () => ({
  type: types.CREATE_APIDATA, payload: data,
});