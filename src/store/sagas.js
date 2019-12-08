import { put, all, takeEvery } from "redux-saga/effects";
import { GET_AUTOCOMPLETE, getAutocompleteSuccess, setError } from "./actions";
import { getAutocompleteFetch } from "../api/apiFetch";

export function* getAutocompleteSaga({ params }) {
  try {
    const options = yield getAutocompleteFetch(params);
    yield put(getAutocompleteSuccess(options));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* watchAllSagas() {
  yield all([takeEvery(GET_AUTOCOMPLETE, getAutocompleteSaga)]);
}
