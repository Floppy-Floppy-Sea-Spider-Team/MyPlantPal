/**
 * ************************************
 *
 * @module TotalPlantData
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Display the header of all the relevant plant scores and quantities
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';

//Display the plant data 
const TotalPlantData = () => {
  const totalCards = useSelector((state) => state.plants.totalPlants);

  return (
    <div className="totalPlantDataBox">
      <div className="totalPlantData">
         Total Plants:  {totalCards}
      </div>
      <div className="totalPlantData">Filter Plants</div>
    </div>
  );
};
export default TotalPlantData;
