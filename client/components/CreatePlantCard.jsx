/**
 * ************************************
 *
 * @module  CreateCard
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Render the UI for the individual plant cards and add their functionality.
 * ************************************
 */

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const CreatePlantCard = props => {

  //Declare the relevant states
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [soilType, setSoilType] = useState('');
  const [waterFrequency, setWaterFrequency] = useState('');
  const [fileUrl, setFileUrl] = useState(null);

  //Create the plant image url to apply to the src
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFileUrl(url);
    }
  };

  //Create the new plant
  const handleSubmission = (e) => {
    e.preventDefault(); 
    
    //first use dispatch to call APIreducer
    //click down instantiates with the different options from the API fetch returned to state
    //client selects from click-down the specific plant they want
    //we make an edit of the state to get rid of all other options in state and just leave the one we are interested in.  we also make aa useDispatch call to our plant reducer
    

    const data = {
      name: name, 
      type: species,
      lastWatered: lastWater,
      frequency: waterFrequency, 
      photo: fileUrl
    };
    console.log(data);
// Process a fetch request to the server side to create the new schema, then when finished return to the home page
    fetch('http://localhost:8080/leaf/plant/createplant', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),

    })
    .then(() => {
      console.log('new changes!');
      toHome();
    });
  }


  // Upon successfully creating a plant return the user back to the home page 
  const toHome = () => {
    let path = "/home";
    navigate(path);
  };

  // If you click on the link of the page redirect back to same page
  let navigate = useNavigate();
  const toCreate = () => {
      let path = '/create';
      navigate(path);
  }
  // Create the react component 
  return (
    <div className = 'createPlantCard'>
      <header className = 'createCardHeader'>
        <span className = 'createAvatar'>
        {fileUrl && <img className='avatarImage' src={fileUrl} alt ='preview of avatar'file/>}
        </span>
        <div className='previewNameBox'>
          <span className = 'previewName'>
            {name}
          </span>
        </div>
        
      </header>
      <section className = 'inputField'>
        <div className='photoInput'>
          <span>Input Image: </span>
          <form action="/action_page.php">
          <input
            className='createInput'
            type="file"
            id="chooseFileButton"
            name="filename"
            onChange={handleFileChange}
          />
          </form>
        </div>
        <div className='createLabels'>
          <span>Name: </span>
          <input
            className='createInput'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='createLabels'>
          <span>Species: </span>
          <input
            className='createInput'
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className='createLabels'>
          <span>Soil Type: </span>
          <input
            className='createInput'
            type="text"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          />
        </div>
        <div className='createLabels'>
          <span>Water Frequency: </span>
          <input
            className='createInput'
            type="text"
            value={waterFrequency}
            onChange={(e) => setWaterFrequency(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick = {handleSubmission}
          >Add New Plant</button>
        </div>
      </section>  
    </div>
  );
};

export default CreatePlantCard;
