import React from 'react';
import { Link } from 'react-router-dom';

function Picture({ airtableData }) {
  // Mapping character names to image paths
  const characterImages = {
    'Luke Skywalker': './image/Luke.png',
    'Darth Vader': './image/Darth.jpg',
    'Obi-Wan Kenobi': './image/obi.jpg',
    'R2-D2': './image/r2.jpg',
    'C-3PO': './image/c3.jpg',
    'Leia Organa': './image/leia.jpg',
    'Owen Lars': './image/lars.jpg',
    'Biggs Darklighter': './image/biggs.jpg',
    'Beru Whitesun lars': './image/beru.jpg',
    'R5-D4': './image/r4.jpg'
  };

  return (
    <div>
      <h1>Character Images</h1>
      {airtableData.map((record, index) => (
        <Link key={index} to={`/details/${record.fields.name}`}>
          <img src={characterImages[record.fields.name]} alt={record.fields.name} />
        </Link>
      ))}
    </div>
  );
}

export default Picture;