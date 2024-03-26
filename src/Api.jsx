import React from 'react';
import { Link } from 'react-router-dom';

function Api({ airtableData }) {
  return (
    <div>
      <h2>Character Data</h2>
      <ul>
        {airtableData.map((record, index) => (
          <div key={index}>
            
            <Link to={"/details/" + record.fields.name}>
              <strong>Name:</strong> {record.fields.name}
            </Link>
            <br />
            <strong>Height:</strong> {record.fields.height} <br />
            <strong>Mass:</strong> {record.fields.mass}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Api;
