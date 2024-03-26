import React from 'react';
import { Link } from 'react-router-dom';
import luke from './image/Luke.png';
import Darth from './image/Darth.jpg';
import obi from './image/obi.jpg';
import r2 from './image/r2.jpg';
import c3 from './image/c3.jpg';
import leia from './image/leia.jpg';
import lars from './image/lars.jpg';
import biggs from './image/biggs.jpg';
import beru from './image/beru.jpg';
import r4 from './image/r4.jpg';

function Picture() {
  return (
    <div>
      <h1>Character Images</h1>
      <Link to="/api">
        <img src={luke} alt="Luke" />
        <img src={Darth} alt="darth" />
        <img src={obi} alt="Obi" />
        <img src={r2} alt="R2" />
        <img src={c3} alt="C3" />
        <img src={leia} alt="Leia" />
        <img src={lars} alt="Lars" />
        <img src={beru} alt="BERU" />
        <img src={biggs} alt="Biggs" />
        <img src={r4} alt="Biggs" />
        
        


        
      </Link>
    </div>
  );
}

export default Picture;




