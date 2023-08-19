import React from 'react';
import MainPage from './containers/MainPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/styles.css'


// here we need to decide what is initially rendered

const App = () => {
  return(
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage />}></Route>
              {/* <Route path='/create' element={<CreateTool />}></Route>
              <Route path='/update' element={<UpdateTool />}></Route> */}
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
