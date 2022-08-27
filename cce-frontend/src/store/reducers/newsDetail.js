import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  newsDetail: null,
  loading: true,
};

const fetchNewsDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchNewsDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchNewsDetailSuccess = (state, action) => {
  return updateObject(state, {
    newsDetail: action.newsDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWSDETAIL_START:
      return fetchNewsDetailStart(state, action);
    case actionTypes.FETCH_NEWSDETAIL_SUCCESS:
      return fetchNewsDetailSuccess(state, action);
    case actionTypes.FETCH_NEWSDETAIL_FAIL:
      return fetchNewsDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
