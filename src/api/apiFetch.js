import { request } from './restConfig';

const BASE_URL = 'https://dataservice.accuweather.com';
const API_KEY = 'V4wLi7E7zgghovUVROeLjGO3PBMP0apM';

export const getAutocompleteFetch = params => {
  return request(
    `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${params}`,
  );
};

export const getWeatherFetch = locationKey => {
  return request(
    `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
  );
};

export const getFavoriteWeatherFetch = locationKey => {
  return request(
    `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
  ).then(weather => ({ [locationKey]: weather[0] }));
};

export const getFiveDaysWeatherFetch = (locationKey, metric = true) => {
  return request(
    `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${metric}`,
  );
};

export const getCityByGeolocationFetch = location => {
  return request(
    `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${location.latitude},${location.longitude}`,
  );
};
