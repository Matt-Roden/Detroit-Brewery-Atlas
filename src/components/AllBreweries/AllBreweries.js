import './AllBreweries.css'
import BreweryCard from '../BreweryCard/BreweryCard'
import PropTypes from 'prop-types'

const AllBreweries = ({ allBreweriesData, updateFavorites }) => {
  const breweryCards = allBreweriesData.map((brewery) => {
    return (
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        brewery={brewery}
        updateFavorites={updateFavorites}
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
  updateFavorites: PropTypes.func.isRequired
}
