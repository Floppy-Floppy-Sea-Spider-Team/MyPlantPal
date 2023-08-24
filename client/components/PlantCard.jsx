


import React from 'react';
const PlantCard = (props) => {

  // let currPlants=useSelector(state=>state.plantList)

  //Take in and deconstruct the relevant props from the plant display to create the indivual card components
  const { plantName, species, lastWatered, frequency, cycle, lastPotted, sunlight, dateAdded, photo } = props; 




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
      </div>
    </div>
  );
};

export default PlantCard;

