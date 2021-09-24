import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import BreweryCard from '../BreweryCard/BreweryCard'
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
      <Header />
      <AllBreweries allBreweriesData={allBreweries} />
    </div>
  );
}

export default App;
