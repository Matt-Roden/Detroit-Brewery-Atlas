import './BreweryCard.css'

const BreweryCard = ({ name, type, street, city, state, zip, phone, website, imageSrc }) => {
  return (
    <article className='brewery-card-container'>
      <div className='image-fav-container'>
        <img className='brewery-pic' src={imageSrc} alt={`${name}`} />
        <img className='favoriting image' src='null' alt='favorite-icon' />
      </div>
      <div className='info-container text'>
        <h2 className='name text'>{name}</h2>
        <h3 className='type text'>{`Brewery Type: ${type}`}</h3>
        <div className='address-container'>
          <p className='street text'>{street}</p>
          <p className='city-state text'>{`${city}, ${state}`}</p>
          <p className='zipcode text'>{zip}</p>
        </div>
        <h3 className='phone-number text'>{phone}</h3>
        <a className='website text' href={website}>Website</a>
      </div>
    </article>
  )
}

export default BreweryCard
