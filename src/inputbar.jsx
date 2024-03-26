import React, { useState } from 'react';

const InputBar = ({ onInputChange, airtableData }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
   
    onInputChange(value);

    
    const filteredResults = airtableData.filter(record => {
   
      return record.fields.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(filteredResults);
  };
    
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
     
      {inputValue !== '' && (
        <ul>
          {searchResults.map((record, index) => (
            <li key={index}>
             
              Name: {record.fields.name}, Height: {record.fields.height}, Mass: {record.fields.mass}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputBar;
