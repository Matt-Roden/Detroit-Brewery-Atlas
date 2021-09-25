import './Favorites.css'
import BreweryCard from '../BreweryCard/BreweryCard'

const Favorites = ({ favoritesList, updateFavorites }) => {
  const favoriteCards = favortiesList.map((favorite) => {
    return (
      <BreweryCard
        key={favorite.id}
        id={favorite.id}
        brewery={favorite}
        updateFavorites={updateFavorites}
      />
    )
  })

  return(
    <section className='favorites-container'>
      {favoriteCards}
    </section>
  )
}

export default Favorites
