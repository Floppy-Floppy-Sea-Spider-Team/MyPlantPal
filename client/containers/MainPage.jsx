/**
 * ************************************
 *
 * @module MainPage
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Display the NavBar, NavSidePanel, and Plant Container
 *
 * ************************************
 */

import React from 'react';
import NavSidePanel from '../components/NavSidePanel.jsx';
import PlantContainer from './PlantContainer.jsx';
import NavBar from '../components/Nav-Bar.jsx';
import CreatePlantCard from '../components/CreatePlantCard.jsx';

//The initial rendering of the main. Displays the NavBar and PlantContainer to modularize
const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className="homePageContainer">
        <div className='sidePanel'></div>
        <PlantContainer />
        <div className='sidePanel'></div>
      </div>
    </div>
  );
};

export default MainPage;
