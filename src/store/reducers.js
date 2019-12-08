import { GET_AUTOCOMPLETE_SUCCESS, SET_ERROR } from "./actions";

const initialState = {
  options: [],
  weather: {},
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTOCOMPLETE_SUCCESS:
      return { ...state, options: action.options, error: null };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};
