import * as types from '../constants/actionTypes.js';

export const createPlantActionCreator = (name, species, lastWater, lastPotted) => ({
  type: types.CREATE_PLANT, payload: {
    name: name,
    species: species,
    lastWatered: lastWater,
    lastPotted: lastPotted,
  },
});

export const loadAllPlantsActionCreator = (plantArray) => ({
  type: types.LOAD_PLANT, payload: {
    plants: plantArray,
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

export const fetchApiDataActionCreator = (species) => ({
  type: types.CREATE_APIDATA, payload: {
    species: species,
  },
});

export const fetchPlantActionCreator =  (dataArray) => ({
  type: types.FETCH_PLANT, payload: {
    data: dataArray,
  }
})