export const GET_AUTOCOMPLETE = 'GET_AUTOCOMPLETE';
export const GET_AUTOCOMPLETE_SUCCESS = 'GET_AUTOCOMPLETE_SUCCESS';

export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';

export const GET_FAVOURITES_WEATHER = 'GET_FAVOURITES_WEATHER';
export const GET_FAVOURITES_WEATHER_SUCCESS = 'GET_FAVOURITES_WEATHER_SUCCESS';

export const GET_CITY_BY_GEOLOCATION = 'GET_CITY_BY_GEOLOCATION';
export const GET_FIVE_DAYS_WEATHER_SUCCESS = 'GET_FIVE_DAYS_WEATHER_SUCCESS';
export const SET_METRIC = 'SET_METRIC';
export const SET_CITY = 'SET_CITY';
export const SET_ERROR = 'SET_ERROR';

export const getAutocomplete = params => ({ type: GET_AUTOCOMPLETE, params });
export const getAutocompleteSuccess = options => ({
  type: GET_AUTOCOMPLETE_SUCCESS,
  options,
});

export const getWeather = params => ({ type: GET_WEATHER, params });
export const getWeatherSuccess = weather => ({
  type: GET_WEATHER_SUCCESS,
  weather,
});

export const getFiveDaysWeatherSuccess = weather => ({
  type: GET_FIVE_DAYS_WEATHER_SUCCESS,
  weather,
});

export const getFavoritesWeather = favorites => ({
  type: GET_FAVOURITES_WEATHER,
  favorites,
});
export const getFavoritesWeatherSuccess = favoritesWeather => ({
  type: GET_FAVOURITES_WEATHER_SUCCESS,
  favoritesWeather,
});

export const getCityByGeolocation = location => ({
  type: GET_CITY_BY_GEOLOCATION,
  location,
});

export const setError = error => ({ type: SET_ERROR, error });
export const setCity = city => ({ type: SET_CITY, city });
export const setMetric = metric => ({ type: SET_METRIC, metric });
