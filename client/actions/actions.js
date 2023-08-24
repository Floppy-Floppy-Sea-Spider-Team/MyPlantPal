import * as types from '../constants/actionTypes.js';

export const createPlantActionCreator = (name, species, lastWater, lastPotted, cycle, watering, sunlight, image) => ({
  type: types.CREATE_PLANT, payload: {
    name: name,
    species: species,
    lastWatered: lastWater,
    lastPotted: lastPotted,
    cycle: cycle,
    watering: watering,
    sunlight: sunlight,
    image: image,
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

export const selectSpeciesActionCreator = (species) => ({
  type: types.SELECT_API, payload: {
    species: species,
  },
});

export const fetchPlantActionCreator =  (dataArray) => ({
  type: types.FETCH_PLANT, payload: {
    data: dataArray,
  }
})