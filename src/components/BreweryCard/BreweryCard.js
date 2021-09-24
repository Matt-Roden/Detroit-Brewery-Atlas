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
        <div className='address-container'>
          <p className='street'>{street}</p>
          <p className='city-state'>{`${city}, ${state}`}</p>
          <p className='zipcode'>{zip}</p>
        </div>
        <h3 className='phone-number'>{phone}</h3>
        <h3 className='website'>{website}</h3>
      </div>
    </article>
  )
}
