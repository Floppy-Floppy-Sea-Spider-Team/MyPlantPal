import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createPlantActionCreator,
  fetchApiDataActionCreator,
} from '../actions/actions';

// access apiData from state

const CreatePlantCard = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastWater, setLastWater] = useState('');
  const [lastPotted, setLastPotted] = useState('');

  const apiData = useSelector((state) => state.apiData);

  //Create the plant image url to apply to the src
  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     const url = URL.createObjectURL(selectedFile);
  //     setFileUrl(url);
  //   }
  // };

  //Create the new plant
  const handleSubmission = (e) => {
    e.preventDefault();
    dispatch(fetchApiDataActionCreator(e.target.parentNode[1].value));
  };

  // Upon successfully creating a plant return the user back to the home page
  const toHome = () => {
    let path = '/home';
    navigate(path);
  };

  // If you click on the link of the page redirect back to same page
  const toCreate = () => {
    let path = '/create';
    navigate(path);
  };

  const selectSpecies = (e) => {
    //apireducer to get rid of species not chosen
    dispatch(fetchPlantActionCreator(e.target.value));
    //call to
    dispatch(createPlantActionCreator(name, lastWater, lastPotted));
    toHome();
  };

  // Create the react component
  return (
    <div className="createPlantCard">
      <header className="createCardHeader">
        <div className="previewNameBox">
          <span className="previewName">{name}</span>
        </div>
      </header>
      <section className="inputField">
        <form onSubmit={handleSubmission}>
          <div className="createLabels">
            <span>Name: </span>
            <input
              className="createInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="createLabels">
            <span>Species: </span>
            <input className="createInput" type="text" value={species} />
          </div>
          <div className="createLabels">
            <span>Last Watered: </span>
            <input
              className="createInput"
              type="datetime-local"
              value={lastWater}
              onChange={(e) => setLastWater(e.target.value)}
            />
          </div>
          <div className="createLabels">
            <span>Last Potted: </span>
            <input
              className="createInput"
              type="datetime-local"
              value={lastPotted}
              onChange={(e) => setLastPotted(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add New Plant</button>
          </div>
        </form>
      </section>
      <div className="createInput">
        <select name="species" onClick={selectSpecies}>
          {apiData.map((element, index) => (
            <option key={index} value={element.scientific_name}>
              {element.scientific_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CreatePlantCard;
