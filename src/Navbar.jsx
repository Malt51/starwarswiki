// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <ul>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/api">Star-Wars Character</Link></div>
        <div><Link to="/picture">Character Image</Link></div>
       
      </ul>
    </nav>
  );
}

export default NavBar;