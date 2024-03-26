
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import InputBar from './inputbar';
import Api from './Api';
import Picture from './Picture';
import DetailsPage from './DetailsPage';


function App() {
  const [swapiData, setSwapiData] = useState([]);
  const [airtableData, setAirtableData] = useState([]);
  const handleInputChange = (inputValue) => {};
  // const viteToken = import.meta.env.VITE_TOKEN
  // console.log(viteToken)

  useEffect(() => {
    const fetchSwapiData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const viteToken = import.meta.env.VITE_TOKEN
        console.log(viteToken)
        setSwapiData(response.data.results);
      } catch (error) {
        console.error('Error fetching SWAPI data:', error);
      }
    };

    fetchSwapiData();
  }, []);

  useEffect(() => {
    const postToAirtable = async (data) => {
      try {
        const apiKey = `patdT2DOiLfyGLfnr.b2be40ce8565d03878aa5e2596a050b2adf9a781111768a782e9a45949f5b0df`;
        const airtableApiUrl = 'https://api.airtable.com/v0/app3BgHWINCCOy5Ww/tblbNY9NDwTiEsJ3u';

        const formattedData = data.map(person => ({
          fields: {
            name: person.name,
            height: person.height,
            mass: person.mass,
            
          }
        }));

        await Promise.all(formattedData.map(async (item) => {
          await axios.post(airtableApiUrl, item, {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            }
          });
        }));

        console.log('Data posted to Airtable successfully');
      } catch (error) {
        console.error('Error posting data to Airtable:', error);
      }
    };

    if (swapiData.length > 0) {
      postToAirtable(swapiData);
    }
  }, [swapiData]);

  useEffect(() => {
    const fetchAirtableData = async () => {
      try {
        const apiKey = 'patdT2DOiLfyGLfnr.b2be40ce8565d03878aa5e2596a050b2adf9a781111768a782e9a45949f5b0df';
        const airtableApiUrl = 'https://api.airtable.com/v0/app3BgHWINCCOy5Ww/tblbNY9NDwTiEsJ3u';

        const response = await axios.get(airtableApiUrl, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });

        const uniqueNames = new Set();
        const filteredData = response.data.records.filter(record => {
          if (uniqueNames.has(record.fields.name)) {
            return false; 
          } else {
            uniqueNames.add(record.fields.name); 
            return true; 
          }
        });

        setAirtableData(filteredData);
      } catch (error) {
        console.error('Error fetching data from Airtable:', error);
      }
    };

    fetchAirtableData();
  }, []);

  return (
    <Router>
      <div>
        <h1>Star Wars Mini Wiki</h1>
        <NavBar />
        <InputBar onInputChange={handleInputChange} airtableData={airtableData} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api airtableData={airtableData} />} /> {/* Pass airtableData as a prop */}
          <Route path="/picture" element={<Picture airtableData={airtableData} />} />
          <Route path="/details/:name" element={<DetailsPage airtableData={airtableData} />} />
        </Routes>
      </div>
      
    </Router>
  );
}

function Home() {
  return (
    <div>
    
     

    </div>
  );
}

export default App;







