import {updateObject} from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  language: 1,
  loading: true,
};

const fetchLanguageStart = (state, action) => {
  return updateObject(state);
};

const fetchLanguageFail = (state, action) => {
  return updateObject(state);
};

const fetchLanguageSuccess = (state, action) => {
  return updateObject(state, {
    language: action.language,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LANGUAGE_START:
      return fetchLanguageStart(state, action);
    case actionTypes.FETCH_LANGUAGE_FAIL:
      return fetchLanguageFail(state, action);
    case actionTypes.FETCH_LANGUAGE_SUCCESS:
      return fetchLanguageSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
