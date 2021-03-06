import sweetError from '../utilities/sweetError';
import handleErrors from '../utilities/handleErrors'

const apiKey = process.env.REACT_APP_ACCU_API_KEY
const baseUrl = 'https://dataservice.accuweather.com/'

const Api = {
  searchLocation: location => {
    const queryParams = `apikey=${apiKey}&q=${location}&offset=5`
    const url = `${baseUrl}locations/v1/cities/search?${queryParams}`;
    const promise = fetch(url, { credentials: "same-origin"})
                      .then(handleErrors)
                      .catch(error => sweetError(error))
    return { promise }
  },
  searchGeoLocation: (lat, lon) => {
    const queryParams = `apikey=${apiKey}&q=${lat},${lon}&toplevel=true`
    const url = `${baseUrl}locations/v1/cities/geoposition/search?${queryParams}`;
    const promise = fetch(url, { credentials: "same-origin"})
                      .then(handleErrors)
                      .catch(error => sweetError(error))
    return { promise }
  },
  fetchFiveDayForecast: locationId => {
    const queryParams = `apikey=${apiKey}&metric=true`
    const url = `${baseUrl}forecasts/v1/daily/5day/${locationId}?${queryParams}`
    const promise = fetch(url, { credentials: "same-origin"})
                      .then(handleErrors)
                      .catch(error => sweetError(error))
    return { promise }
  },
  fetchCurrentConditions: locationId => {
    const queryParams = `apikey=${apiKey}&details=true`
    const url = `${baseUrl}currentconditions/v1/${locationId}?${queryParams}`
    const promise = fetch(url, { credentials: "same-origin"})
                      .then(handleErrors)
                      .catch(error => sweetError(error))
    return { promise }
  },
  fetchTopFifty: () => {
    const queryParams = `apikey=${apiKey}&details=true`
    const url = `${baseUrl}locations/v1/topcities/50?${queryParams}`
    const promise = fetch(url, { credentials: "same-origin"})
                      .then(handleErrors)
                      .catch(error => sweetError(error))
    return { promise }
  },
  fetchHourlyForecast: locationId => {
    const queryParams = `apikey=${apiKey}&details=true&metric=true`
    const url = `${baseUrl}forecasts/v1/hourly/12hour/${locationId}?${queryParams}`
    const promise = fetch(url, { credentials: "same-origin"})
                      .then(handleErrors)
                      .catch(error => sweetError(error))
    return { promise }
  }
}

export default Api;
