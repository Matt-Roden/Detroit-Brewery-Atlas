export const cleanData = (data) => {
  data = removeNonDetroit(data)
  return data
}

const removeNonDetroit = (data) => {
  const detroitOnlyData = data.filter((brewery) => brewery.state === 'Michigan')
  // return cleanUrls(detroitOnlyData)
  return detroitOnlyData
}

const cleanUrls = (data) => {
  const cleanedUrls = data.reduce((accArr, brewery) => {
    if (brewery.website_url === null) {
      return brewery.website_url = 'No website available 🍻'
    }

    return accArr
  }, [])
  return cleanedUrls
}
