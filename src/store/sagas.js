import { put, all, takeEvery } from 'redux-saga/effects';
import {
  GET_AUTOCOMPLETE,
  GET_WEATHER,
  getAutocompleteSuccess,
  getWeatherSuccess,
  setError,
  setCity,
  getFiveDaysWeatherSuccess,
  GET_FAVOURITES_WEATHER,
  getFavoritesWeatherSuccess,
  GET_CITY_BY_GEOLOCATION,
} from './actions';
import {
  getAutocompleteFetch,
  getWeatherFetch,
  getFiveDaysWeatherFetch,
  getFavoriteWeatherFetch,
  getCityByGeolocationFetch,
} from '../api/apiFetch';

export function* getAutocompleteSaga({ params }) {
  try {
    const options = params ? yield getAutocompleteFetch(params) : [];
    yield put(getAutocompleteSuccess(options));
  } catch (err) {
    yield put(setError('Sorry, something went wrong in autocomplete'));
  }
}

export function* getWeatherSaga({ params: { selectedOption, metric } }) {
  try {
    const weather = yield getWeatherFetch(selectedOption.Key);
    const fiveDaysWeather = yield getFiveDaysWeatherFetch(
      selectedOption.Key,
      metric,
    );
    yield put(getWeatherSuccess(weather));
    yield put(getFiveDaysWeatherSuccess(fiveDaysWeather));
    yield put(setCity(selectedOption));
  } catch (err) {
    yield put(setError('Sorry, something went wrong in getting weather'));
  }
}

export function* getWeatherByGeolocationSaga({ location }) {
  try {
    const city = yield getCityByGeolocationFetch(location);
    yield getWeatherSaga({ params: { selectedOption: city } });
  } catch (err) {
    yield put(
      setError('Sorry, something went wrong in getting weather by geolocation'),
    );
  }
}

export function* getFavoritesWeatherSaga({ favorites }) {
  try {
    const weather = yield all(
      favorites.map(city => getFavoriteWeatherFetch(city.key)),
    );
    const favoritesWeather = yield weather.reduce((acc, el) => {
      return { ...acc, ...el };
    }, {});
    yield put(getFavoritesWeatherSuccess(favoritesWeather));
  } catch (err) {
    yield put(
      setError(
        'Sorry, something went wrong in getting weather for favorites cities',
      ),
    );
  }
}

export function* watchAllSagas() {
  yield all([
    takeEvery(GET_AUTOCOMPLETE, getAutocompleteSaga),
    takeEvery(GET_WEATHER, getWeatherSaga),
    takeEvery(GET_FAVOURITES_WEATHER, getFavoritesWeatherSaga),
    takeEvery(GET_CITY_BY_GEOLOCATION, getWeatherByGeolocationSaga),
  ]);
}
