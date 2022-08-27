import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  newsData: null,
  loading: true
};

const fetchNewsStart = (state, action) => {
  return updateObject(state);
};

const fetchNewsFail = (state, action) => {
  return updateObject(state);
};

const fetchNewsSuccess = (state, action) => {
  return updateObject(state, { 
    newsData: action.newsData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_START:
      return fetchNewsStart(state, action);
    case actionTypes.FETCH_NEWS_SUCCESS:
      return fetchNewsSuccess(state, action);
    case actionTypes.FETCH_NEWS_FAIL:
      return fetchNewsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
