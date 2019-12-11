import { put, all, takeEvery } from 'redux-saga/effects';
import {
  GET_AUTOCOMPLETE,
  GET_WEATHER,
  getAutocompleteSuccess,
  getWeatherSuccess,
  setError,
  setCity,
  GET_FIVE_DAYS_WEATHER,
  getFiveDaysWeatherSuccess,
  GET_FAVOURITES_WEATHER,
  getFavoritesWeatherSuccess,
} from './actions';
import {
  getAutocompleteFetch,
  getWeatherFetch,
  getFiveDaysWeatherFetch,
  getFavoriteWeatherFetch,
} from '../api/apiFetch';

export function* getAutocompleteSaga({ params }) {
  try {
    const options = params ? yield getAutocompleteFetch(params) : [];
    yield put(getAutocompleteSuccess(options));
  } catch (err) {
    yield put(setError('Sorry, something went wrong in autocomplete'));
  }
}

export function* getWeatherSaga({ selectedOption }) {
  try {
    const weather = yield getWeatherFetch(selectedOption.Key);
    yield put(getWeatherSuccess(weather));
    yield put(setCity(selectedOption));
  } catch (err) {
    yield put(setError('Sorry, something went wrong in getting weather'));
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

export function* getFiveDaysWeatherSaga({ key }) {
  try {
    const weather = yield getFiveDaysWeatherFetch(key);
    yield put(getFiveDaysWeatherSuccess(weather));
  } catch (err) {
    yield put(
      setError('Sorry, something went wrong in getting weather for 5 days'),
    );
  }
}

export function* watchAllSagas() {
  yield all([
    takeEvery(GET_AUTOCOMPLETE, getAutocompleteSaga),
    takeEvery(GET_WEATHER, getWeatherSaga),
    takeEvery(GET_FAVOURITES_WEATHER, getFavoritesWeatherSaga),
    takeEvery(GET_FIVE_DAYS_WEATHER, getFiveDaysWeatherSaga),
  ]);
}
