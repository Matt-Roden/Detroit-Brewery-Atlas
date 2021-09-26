const americanBadAss = 'https://res.cloudinary.com/yoroden/image/upload/v1632499420/americanbadass_qaed9c.jpg'
const atwater = 'https://res.cloudinary.com/yoroden/image/upload/v1632499420/atwater_ouphjw.jpg'
const batchBrewing = 'https://res.cloudinary.com/yoroden/image/upload/v1632499421/batchbrewing_qmvuqg.jpg'
const brewDetroit = 'https://res.cloudinary.com/yoroden/image/upload/v1632499420/brewdetroit_ljb1bl.jpg'
const breweyFaisan = 'https://res.cloudinary.com/yoroden/image/upload/v1632499419/faisan_efndgr.jpg'
const detBeerCo = 'https://res.cloudinary.com/yoroden/image/upload/v1632499419/detroitbeerco_zikljg.jpg'
const easternMarket = 'https://res.cloudinary.com/yoroden/image/upload/v1632499418/easternmarket_grdwyy.jpg'
const founders = 'https://res.cloudinary.com/yoroden/image/upload/v1632499417/founders_xvlrph.jpg'
const granitCity = 'https://res.cloudinary.com/yoroden/image/upload/v1632499418/granitecity_wn0szz.jpg'
const motorCityBrewWorks = 'https://res.cloudinary.com/yoroden/image/upload/v1632499418/motorcitybrew_w7xmzp.jpg'
const motorCityWarehouse = 'https://res.cloudinary.com/yoroden/image/upload/v1632499418/motorcitybrewwarehouse_h6s1yz.jpg'
const trafficJam = 'https://res.cloudinary.com/yoroden/image/upload/v1632499418/trafficjam_gos9kw.jpg'
const vivios = 'https://res.cloudinary.com/yoroden/image/upload/v1632499418/vivios1_ln0eai.jpg'


export const cleanData = (data) => {
  const cleanedData = addIsFavoritedProp(data)
  return cleanedData
}

const addIsFavoritedProp = (data) => {
const newData = data.map(breweryObj => {
  return { ...breweryObj, isFavorited: false }
})
return removeNonDetroit(newData)
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
    } else {
      // 👇 Refactor to call some sort of error handling function 
      return 'Sorry, no breweries matching the required conditions'
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
