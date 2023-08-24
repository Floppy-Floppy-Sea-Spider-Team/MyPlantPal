
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';
import * as types from '../constants/actionTypes';
import CreatePlantCard from '../components/CreatePlantCard.jsx';
import NavBar from '../components/Nav-Bar.jsx';


const NewPlantContainer = () => {

//The rendering of the components
  return (
    <div>
      <NavBar />
        <main className = 'createContainer'> 
          <CreatePlantCard/> 
        </main> 
    </div>
  );
};

export default NewPlantContainer;
