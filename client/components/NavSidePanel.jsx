

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavSidePanel = () => {
  let navigate = useNavigate();
  const toCreate = () => {
    let path = '/create';
    navigate(path);
  };

  return (
    <div className="navSidePanel">
      <button className="navButton">My Plants</button>
      <hr />
      <button className="navButton" onClick={toCreate}>
        New Plants
      </button>
      <hr />
      <button className="navButton">Discover</button>
    </div>
  );
};

export default NavSidePanel;
