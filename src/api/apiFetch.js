import { request } from './restConfig';
import { mock, fiveMock, weatherMock } from './mockData';

const BASE_URL = 'http://dataservice.accuweather.com';
const API_KEY = 'xLSpz4alKO638nrASxn4WzH4V2AqqV6y';

export const getAutocompleteFetch = params => {
  return request(
    `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${params}`,
  );
  //return mock;
};

export const getWeatherFetch = locationKey => {
  return request(
    `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
  );
  //return weatherMock;
};

export const getFavoriteWeatherFetch = locationKey => {
  return request(
    `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`,
  ).then(weather => ({ [locationKey]: weather[0] }));
  //return weatherMock;
};

export const getFiveDaysWeatherFetch = (locationKey, metric = true) => {
  return request(
    `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${metric}`,
  );
  //return fiveMock;
};
