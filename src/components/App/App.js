import React, { useState, useEffect } from 'react'
import {cleanData} from '../../utilities'
import './App.css';

const App = () => {
  const [allBreweries, setAllBreweries] = useState([])
  const [favorites, setFavorites] = useState([])

  const getAllBreweries = async () => {
    try {
      const response = await fetch('https://api.openbrewerydb.org/breweries?by_city=detroit')
      const breweriesData = await response.json()
      const cleanedData = cleanData(breweriesData)
      setAllBreweries(cleanedData)
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  useEffect(() => {
    getAllBreweries()
  }, [])

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
