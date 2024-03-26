import { useParams } from 'react-router-dom';
import Darth from './image/Darth.jpg';
import luke from './image/Luke.png';
import obi from './image/obi.jpg';
import leia from './image/leia.jpg';
import r2 from './image/r2.jpg';
import c3 from './image/c3.jpg';
import lars from './image/lars.jpg';
import biggs from './image/biggs.jpg';
import beru from './image/beru.jpg';
import r4 from './image/r4.jpg';




function DetailsPage({ airtableData }) {
  let { name } = useParams();

 
  const characterImages = {
    'Darth Vader': Darth,
    'Luke Skywalker': luke,
    'Obi-Wan Kenobi': obi,
    'Leia Organa' : leia,
    'R2-D2' : r2,
    'C-3PO' : c3,
    'Owen Lars' : lars,
    'Biggs Darklighter' : biggs,
    'Beru Whitesun lars' : beru,
    'R5-D4': r4 
    
  };

  
  const imagePath = characterImages[name];

  
  const character = airtableData.find(record => record.fields.name === name);

  return (
    <div>
      <h2>Details for {name}</h2>
      
      {imagePath && <img src={imagePath} alt={name} />}
      {character && (
        <div>
          <p>Height: {character.fields.height}</p>
          <p>Mass: {character.fields.mass}</p>
      
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
