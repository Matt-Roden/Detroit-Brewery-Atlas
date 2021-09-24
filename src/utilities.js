const americanBadAss = '../../images/americanbadass.jpeg'
const atwater = '../../images/atwater.jpeg'
const batchBrewing = '../../images/batchbrewing.jpeg'
const brewDetroit = '../../images/brewdetroit.jpeg'
const breweyFaisan = '../../images/faisan.jpeg'
const detBeerCo = '../../images/detroitbeerco.jpeg'
const easternMarket = '../../images/easternmarket.jpeg'
const founders = '../../images/founders.jpeg'
const granitCity = '../../images/granitecity.jpeg'
const motorCityBrewWorks = '../../images/motorcitybrew.jpeg'
const motorCityWarehouse = '../../images/motorcitybrewwarehouse.jpeg'
const trafficJam = '../../images/trafficjam.jpeg'
const vivios = '../../images/vivios1.jpeg'


export const cleanData = (data) => {
  data = removeNonDetroit(data)
  return data
}

const removeNonDetroit = (data) => {
  const detroitOnlyData = data.filter((brewery) => brewery.state === 'Michigan')
  return addImages(detroitOnlyData)
}

const addImages = (detroitData) => {
  const dataWithImages = detroitData.map(breweryObj => {

    if (breweryObj.name === 'American Badass Beer') {
      return { ...breweryObj, image: americanBadAss }
    }
    if (breweryObj.name === 'Atwater Brewing Co') {
      return { ...breweryObj, image: atwater }
    }
    if (breweryObj.name === 'Batch Brewing Co') {
      return { ...breweryObj, image: batchBrewing }
    }
    if (breweryObj.name === 'Brew Detroit') {
      return { ...breweryObj, image: brewDetroit }
    }
    if (breweryObj.name === 'Brewery Faisan') {
      return { ...breweryObj, image: breweyFaisan }
    }
    if (breweryObj.name === 'Detroit Beer Co') {
      return { ...breweryObj, image: detBeerCo }
    }
    if (breweryObj.name === 'Eastern Market Brewing Company') {
      return { ...breweryObj, image: easternMarket }
    }
    if (breweryObj.name === 'Founders Brewing Co') {
      return { ...breweryObj, image: founders }
    }
    if (breweryObj.name === 'Granite City Food & Brewery') {
      return { ...breweryObj, image: granitCity }
    }
    if (breweryObj.name === 'Motor City Brewing Works') {
      return { ...breweryObj, image: motorCityBrewWorks }
    }
    if (breweryObj.name === 'Motor City Brewing Works Warehouse') {
      return { ...breweryObj, image: motorCityWarehouse }
    }
    if (breweryObj.name === 'Traffic Jam and Snug') {
      return { ...breweryObj, image: trafficJam }
    }
    if (breweryObj.name === 'Vivio\'s Food') {
      return { ...breweryObj, image: vivios }
    }
  })

  return dataWithImages
}

// const cleanUrls = (data) => {
//   const cleanedUrls = data.reduce((accArr, brewery) => {
//     if (brewery.website_url === null) {
//       return brewery.website_url = 'No website available 🍻'
//     }
//
//     return accArr
//   }, [])
//   return cleanedUrls
// }
