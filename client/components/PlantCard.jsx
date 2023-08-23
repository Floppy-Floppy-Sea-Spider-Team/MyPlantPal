/**
 * ************************************
 *
 * @module PlantCard
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description deconstruct relevant props, then create the cards for the plants
 *
 * ************************************
 */


import React from 'react';
const PlantCard = (props) => {

  let currPlants=useSelector(state=>state.plantList)

  //Take in and deconstruct the relevant props from the plant display to create the indivual card components
  const { plantName, species, lastWatered, frequency, soil, lastPotted, sunlight, dateAdded/*, photo */} = props; //photo currently doesn't work

  return (
    <div className="plantBox">
      <div className="photoAndInfoTag">
        <div className="plantPhoto">
          {<img src={photo} alt="" />}
        </div>
        <div className="plantName">{plantName}</div>
      </div>

      <div className="infoContainer">
        <div className='plantDetail'>Species: {species}</div>
        <div className='plantDetail'>Last Watered: {lastWatered}</div>
        <div className='plantDetail'>Frequency: {frequency}</div>
        <div className='plantDetail'>Grow Cycle: {cycle}</div>
        <div className='plantDetail'>Last Potted: {lastPotted}</div>
        <div className='plantDetail'>Sunlight: {sunlight}</div>
        <div className='plantDetail'>Date Added: {dateAdded}</div>
      </div>
    </div>
  );
};

export default PlantCard;

