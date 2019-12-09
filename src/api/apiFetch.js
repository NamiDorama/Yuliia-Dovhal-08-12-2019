import { request } from './restConfig';
import { mock, fiveMock, weatherMock } from './mockData';

const BASE_URL = 'http://dataservice.accuweather.com';
const API_KEY = 'SD764YB3QXLHJX4HMNWUQF4IJEZYW545HYXYT2TFD6ZXBZ6PFMLOOE5X';

export const getAutocompleteFetch = params => {
  // return request(
  //   `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${params}`,
  // );
  return mock;
};

export const getWeatherFetch = locationKey => {
  // return request(
  //   `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
  // );
  return weatherMock;
};

export const getFiveDaysWeatherFetch = locationKey => {
  // return request(
  //   `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`,
  // );
  return fiveMock;
};
