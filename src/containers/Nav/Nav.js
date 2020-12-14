import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

export default function Nav() {
  return (
    <div className="nav">
      <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Movie-reel.svg" alt="logo" />

      <NavLink to="/" exact>
        <p>REELS</p>
      </NavLink>
    </div>
  );
}
