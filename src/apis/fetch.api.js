export function fetchApi(fileName) {
  return fetch(`/mockData/${fileName}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error)
    })
}
