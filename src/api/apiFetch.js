import { mock, fiveMock, weatherMock } from './mockData';

const BASE_URL = 'http://dataservice.accuweather.com';
const API_KEY = 'xWB8K6ZlIV36i0F47cO3vdepKhJdQtHM';

export const getAutocompleteFetch = params => {
  // return fetch(
  //   `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${params}`,
  // ).then(res => res.json());
  return mock;
};

export const getWeatherFetch = locationKey => {
  // return fetch(
  //   `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
  // ).then(res => res.json());
  return weatherMock;
};

export const getFiveDaysWeatherFetch = locationKey => {
  // return fetch(
  //   `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`,
  // ).then(res => res.json());
  return fiveMock;
};
