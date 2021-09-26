import './BreweryCard.css'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import notFaved from '../../images/notFaved.png'
import faved from '../../images/faved.png'

const BreweryCard = ({ brewery, updateFavorites, favoritesList }) => {

  // const decideFavoriteIconSrc = () => {
  //   console.log(favoritesList, 'AM I UNDEFINED???')
  //   return favoritesList.map((favorite) => {
  //     if (favorite.id === brewery.id) {
  //       return brewery.isFavorited = true
  //     } else {
  //       return brewery.isFavorited = false
  //     }
  //   })
  // }
  //
  // useEffect(() => {
  //   decideFavoriteIconSrc()
  // }, [])

  return (
    <article className='brewery-card-container'>
      <div className='image-fav-container'>
        <img className='brewery-pic' src={brewery.image} alt={`${brewery.name}`} />
        <div className='fav-icon-wrapper'>
          <img className={brewery.isFavorited ? 'faved favoriting-image' : 'notFaved favoriting-image' }
               src={brewery.isFavorited ? faved : notFaved}
               // src={ decideFavoriteIconSrc()}
               alt='favorite-icon'
               onClick={() => updateFavorites(brewery)}
               />
        </div>
      </div>
      <div className='info-container text'>
        <h2 className='name text'>{brewery.name}</h2>
        <h3 className='type text'>{`Brewery Type: ${brewery.brewery_type}`}</h3>
        <div className='address-container'>
          <p className='street text'>{brewery.street}</p>
          <p className='city-state text'>{`${brewery.city}, ${brewery.state}`}</p>
          <p className='zipcode text'>{brewery.postal_code}</p>
        </div>
        <h3 className='phone-number text'>{brewery.phone}</h3>
        <a className='website text' href={brewery.website_url}>Website</a>
      </div>
    </article>
  )
}

export default BreweryCard

BreweryCard.propTypes = {
  brewery: PropTypes.object.isRequired,
  updateFavorites: PropTypes.func.isRequired,
}
