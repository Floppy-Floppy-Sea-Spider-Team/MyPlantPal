

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

//Display the nav bar
const LoginNavBar = () => {

  return (
    <div className="loginNav-bar">
      <h1>MyPlantPal</h1>
      <img className='headerLogo' src={logo} alt="" />
    </div>
  );
};
export default LoginNavBar;
