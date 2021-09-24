import './BreweryCard.css'

const BreweryCard = ({ name, type, street, city, state, zip, phone, website, imageSrc }) => {
  return (
    <article className='brewery-card-container'>
      <div className='image-fav-container'>
        <img src={imgSrc} alt={`${name}`} />
        <img src='null' alt='favorite-icon' />
      </div>
      <div className='info-container'>
        <h2>{name}</h2>
        <h3>{`Brewery Type: ${type}`}</h3>
      </div>
    </article>
  )
}
