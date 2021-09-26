import './AllBreweries.css'
import BreweryCard from '../BreweryCard/BreweryCard'
import PropTypes from 'prop-types'

const AllBreweries = ({ allBreweriesData, updateFavorites, favoritesList }) => {
  const breweryCards = allBreweriesData.map((brewery) => {
    return (
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        brewery={brewery}
        updateFavorites={updateFavorites}
        favoritesList={favoritesList}
      />
    )
  })

  return (
    <section className='all-breweries-container'>
      {breweryCards}
    </section>
  )
}

export default AllBreweries

AllBreweries.propTypes = {
  allBreweriesData: PropTypes.array.isRequired,
  favoritesList: PropTypes.array.isRequired,
  updateFavorites: PropTypes.func.isRequired
}
