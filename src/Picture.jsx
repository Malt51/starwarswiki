import React from 'react';
import { Link } from 'react-router-dom';

function Picture({ airtableData }) {
  // Mapping character names to image paths
  const characterImages = {
    'Luke Skywalker': './Image/Luke.png',
    'Darth Vader': './Image/Darth.jpg',
    'Obi-Wan Kenobi': './Image/obi.jpg',
    'R2-D2': './Image/r2.jpg',
    'C-3PO': './Image/c3.jpg',
    'Leia Organa': './Image/leia.jpg',
    'Owen Lars': './Image/lars.jpg',
    'Biggs Darklighter': './Image/biggs.jpg',
    'Beru Whitesun Lars': './Image/beru.jpg',
    'R5-D4': './Image/r4.jpg'
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
