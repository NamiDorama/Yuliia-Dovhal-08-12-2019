export const GET_AUTOCOMPLETE = "GET_AUTOCOMPLETE";
export const GET_AUTOCOMPLETE_SUCCESS = "GET_AUTOCOMPLETE_SUCCESS";

export const SET_ERROR = "SET_ERROR";

export const getAutocomplete = params => {
  console.log(111, params);
  return { type: GET_AUTOCOMPLETE, params };
};
export const getAutocompleteSuccess = options => ({
  type: GET_AUTOCOMPLETE_SUCCESS,
  options
});

export const setError = error => ({ type: SET_ERROR, error });
