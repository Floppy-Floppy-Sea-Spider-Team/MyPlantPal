

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlantCard from './PlantCard.jsx';
import {loadAllPlantsActionCreator} from '../actions/actions.js'

//Main function to render the plant display box
const PlantDisplay = () => {

  //One time on load of page render the users plants
  useEffect(() => {
    loadPlants();
  },[])

  //Async method to fetch the users plants with a get request
  const loadPlants = async () => {
    //Grab and parse teh data then set it to the state; otherwise throw an error
    try {
      const data = await fetch('http://localhost:8080/leaf/plant/getPlants')
      const totPlantList = await data.json(); 
      const dispatch=useDispatch()
      dispatch((loadAllPlantsActionCreator(totPlantList)));
      } catch (error) {
        console.log(error);
      } 
    }
    let currPlants=useSelector(state=>state.plantList)

  return (
    <div className='plantDisplay'>
      {currPlants.map((plant) => (
        <PlantCard key={plant.id} plantName={plant.name} species={plant.species} lastWatered={plant.lastWatered} frequency={plant.frequency} cycle={plant.cycle} lastPotted={plant.lastPotted} sunlight={plant.sunlight} dateAdded={plant.dateAdded} photo={plant.photo}/>
      ))}
    </div>
  );
};

export default PlantDisplay;