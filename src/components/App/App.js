import React, { useState, useEffect } from 'react'
import './App.css';

const App = () => {
  const [allBreweries, setAllBreweries] = useState([])

  const getAllBreweries = async () => {
    try {
      const response = await fetch('https://api.openbrewerydb.org/breweries?by_city=detroit')
      const breweriesData = await response.json()
      setAllBreweries(breweriesData)
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
