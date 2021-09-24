import './AllBreweries.css'
import BreweryCard from '../BreweryCard/BreweryCard'

const AllBreweries = ({ allBreweriesData }) => {
  const breweryCards = allBreweriesData.map((brewery) => {
    return (
      <BreweryCard
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
        type={brewery.brewery_type}
        street={brewery.street}
        city={brewery.city}
        state={brewery.state}
        zip={brewery.postal_code}
        phone={brewery.phone}
        website={brewery.website_url}
        imageSrc={brewery.image}
      />
    )
  })

  return (
    <section className='all-breweries-container'>
      {breweryCards}
    </section>
  )
}
