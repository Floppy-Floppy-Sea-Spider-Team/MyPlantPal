import React, { useState, getState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createPlantActionCreator,
  fetchPlantActionCreator,
  selectSpeciesActionCreator,
} from '../actions/actions';

// access apiData from state

const CreatePlantCard = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastWater, setLastWater] = useState('');
  const [lastPotted, setLastPotted] = useState('');
  const [species, setSpecies] = useState('');

  //Create the plant image url to apply to the src
  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     const url = URL.createObjectURL(selectedFile);
  //     setFileUrl(url);
  //   }
  // };
  const apiAsyncData = async (species) => {
    try {
      const response = await fetch(`/api/plant/${species}`);
      const asyncdata = await response.json();
      const { data } = asyncdata;
      console.log(data);
      return data;
    } catch (error) {
      console.log('Error fetch API data');
    }
  };
  //Create the new plant
  const handleSubmission = async (e) => {
    e.preventDefault();
    const speciesValue = species;
    //const species = e.target.parentNode[1].value
    try {
      let x = await apiAsyncData(speciesValue);
      console.log('x: ', x);
      dispatch(fetchPlantActionCreator(x));
    } catch {
      console.log('error');
    }
  };


  // Upon successfully creating a plant return the user back to the home page
  const toHome = () => {
    let path = '/home';
    navigate(path);
  };

  // // If you click on the link of the page redirect back to same page
  // const toCreate = () => {
  //   let path = '/create';
  //   navigate(path);
  // };
  let apiData = useSelector((state) => state.api.apiData);

  const selectSpecies = (e) => {
    let selected = e.target.value
    let plantdata;
    for (let i=0; i<apiData.length; i++){
      if (apiData[i].scientific_name[0]==selected){
        plantdata=apiData[i];
        continue
      }
    }
    const {cycle, watering, sunlight} = plantdata
    const image=plantdata.default_image.thumbnail
  dispatch(createPlantActionCreator(name, selected, lastWater, lastPotted, cycle, watering, sunlight, image ));
  console.log('image', image)
   const request = async () =>{
    try{
      let request = { method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name,
        species: selected,
        lastWatered: lastWatered,
        frequency: watering,
        cycle: cycle,
        lastPotted: lastPotted,
        sunlight: sunlight,
        photo: image }
        ),
    }
    const response = await fetch(
      'http://localhost:8080/leaf/plant/createplant',
      request
    )
   } catch (error) {
    console.log('Error', error);
   }
  }
  request();
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
            <input
              className="createInput"
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
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
