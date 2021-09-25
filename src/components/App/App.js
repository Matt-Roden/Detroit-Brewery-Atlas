import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import AllBreweries from '../AllBreweries/AllBreweries'
import Favorites from '../Favorites/Favorites'
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
      brewery_type: brewery.brewery_type,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      postal_code: brewery.postal_code,
      phone: brewery.phone,
      website_url: brewery.website_url,
      image: brewery.image,
      isFavorited: true
    }
    handleFavorite(brewery.id)
    saveToStorage(newFavorite)
    setFavorites([...favorites, newFavorite])
  }

  const handleFavorite = (id) => {
    const found = allBreweries.find(brewery => brewery.id === id)
    found.isFavorited = !found.isFavorited
  }
  const saveToStorage = (brewery) => {
    localStorage.setItem(brewery.id, JSON.stringify(brewery))
  }

  const removeFavorite = (brewery) => {
    let breweriesToKeep = favorites.filter(favorite => favorite.id !== brewery.id)
    setFavorites(breweriesToKeep)
    handleFavorite(brewery.id)
    removeFromStorage(brewery.id)
  }

  const removeFromStorage = (id) => {
    localStorage.removeItem(id)
  }

  const updateFavorites = (brewery) => {
    let foundFavorite = favorites.find(favorite => favorite.id === brewery.id)

    if (foundFavorite) {
      removeFavorite(foundFavorite)
    } else {
      addFavorite(brewery)
    }
  }

  const getFavoritesFromStorage = () => {
    const favoritesInStorage = Object.keys(localStorage).map(element => {
      return JSON.parse(localStorage.getItem(element))
    })
    setFavorites(favoritesInStorage)
  }

  // const matchFavsWithAllData = () => {
  //   return allBreweries.map((brewery) => {
  //     return favorites.forEach((favorite) => {
  //       if (favorite.id === brewery.id) {
  //         brewery.isFavorited = true
  //       }
  //     })
  //   })
  // }

  useEffect(() => {
    getAllBreweries()
    // matchFavsWithAllData()
  }, [])

  useEffect(() => {
    getFavoritesFromStorage()
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Header />
      <AllBreweries allBreweriesData={allBreweries} updateFavorites={updateFavorites} favoritesList={favorites}/>

      <Favorites favoritesList={favorites} updateFavorites={updateFavorites}/>
    </div>
  );
}

export default App;
