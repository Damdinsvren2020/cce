import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  successStoriesData: null,
  loading: true
};

const fetchSuccessStoriesStart = (state, action) => {
  return updateObject(state);
};

const fetchSuccessStoriesFail = (state, action) => {
  return updateObject(state);
};

const fetchSuccessStoriesSuccess = (state, action) => {
  return updateObject(state, { 
    successStoriesData: action.successStoriesData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS_STORIES_START:
      return fetchSuccessStoriesStart(state, action);
    case actionTypes.FETCH_SUCCESS_STORIES_SUCCESS:
      return fetchSuccessStoriesSuccess(state, action);
    case actionTypes.FETCH_SUCCESS_STORIES_FAIL:
      return fetchSuccessStoriesFail(state, action);
    default:
      return state;
  }
};

export default reducer;