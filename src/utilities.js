export const cleanData = (data) => {
  data = removeNonDetroit(data)
  return data
}

const removeNonDetroit = (data) => {
  const detroitOnlyData = data.filter((brewery) => brewery.state === 'Michigan')
  return detroitOnlyData
}
