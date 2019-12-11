import {
  GET_AUTOCOMPLETE_SUCCESS,
  GET_FIVE_DAYS_WEATHER_SUCCESS,
  GET_WEATHER_SUCCESS,
  SET_CITY,
  SET_ERROR,
  GET_FAVOURITES_WEATHER_SUCCESS,
} from './actions';

const initialState = {
  options: [],
  weather: {},
  fiveDaysWeather: [],
  currentCity: {},
  favoritesWeather: {},
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTOCOMPLETE_SUCCESS:
      return { ...state, options: action.options, error: '' };
    case GET_WEATHER_SUCCESS:
      return { ...state, weather: action.weather[0], error: '' };
    case GET_FIVE_DAYS_WEATHER_SUCCESS:
      return {
        ...state,
        fiveDaysWeather: action.weather.DailyForecasts,
        error: '',
      };
    case GET_FAVOURITES_WEATHER_SUCCESS:
      return { ...state, favoritesWeather: action.favoritesWeather };
    case SET_CITY:
      return { ...state, currentCity: action.city };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};
