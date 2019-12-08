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
} from './actions';
import {
  getAutocompleteFetch,
  getWeatherFetch,
  getFiveDaysWeatherFetch,
} from '../api/apiFetch';

export function* getAutocompleteSaga({ params }) {
  try {
    const options = params ? yield getAutocompleteFetch(params) : [];
    yield put(getAutocompleteSuccess(options));
  } catch (err) {
    console.error(err);
    yield put(setError(err));
  }
}

export function* getWeatherSaga({ selectedOption }) {
  try {
    const weather = yield getWeatherFetch(selectedOption.Key);
    yield put(getWeatherSuccess(weather));
    yield put(setCity(selectedOption));
  } catch (err) {
    console.log(err);
    yield put(setError(err));
  }
}

export function* getFiveDaysWeatherSaga({ key }) {
  try {
    const weather = yield getFiveDaysWeatherFetch(key);
    yield put(getFiveDaysWeatherSuccess(weather));
  } catch (err) {
    console.error(err);
    yield put(setError(err));
  }
}

export function* watchAllSagas() {
  yield all([
    takeEvery(GET_AUTOCOMPLETE, getAutocompleteSaga),
    takeEvery(GET_WEATHER, getWeatherSaga),
    takeEvery(GET_FIVE_DAYS_WEATHER, getFiveDaysWeatherSaga),
  ]);
}
