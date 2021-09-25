import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import AllBreweries from '../AllBreweries/AllBreweries'
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

  const addFavorite = (brewery) => {
    let newFavorite = {
      id: brewery.id,
      key: brewery.id,
      name: brewery.name,
      type: brewery.brewery_type,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      zip: brewery.postal_code,
      phone: brewery.phone,
      website: brewery.website_url,
      imageSrc:, brewery.image
    }
    handleFavorite(brewery.id)

  }

  const handleFavorite = (id) => {
    const found = allBreweries.find(brewery => brewery.id === id)
    found.isFavorited = !found.isFavorited
  }

  const removeFavorite = () => {

  }

  const addToStorage = () => {

  }

  const removeFromStorage = () => {

  }

  const updateFavorites = (brewery) => {
    let foundFavorite = favorites.find(favorite => favorite.id === brewery.id)

    if (foundFavorite) {
      removeFavorite(foundFavorite)
    } else {
      addFavorite(foundFavorite)
    }
  }



  useEffect(() => {
    getAllBreweries()
  }, [])

  return (
    <div className="App">
      <Header />
      <AllBreweries allBreweriesData={allBreweries} updateFavorites={updateFavorites}/>
    </div>
  );
}

export default App;
