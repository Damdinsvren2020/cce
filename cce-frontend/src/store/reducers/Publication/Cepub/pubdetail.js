import * as actionTypes from "../../../actions/actionTypes";
import { updateObject } from "../../../utility";

const initialState = {
  pubDetail: null,
  loading: true,
};

const fetchPubDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchPubDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchPubDetailSuccess = (state, action) => {
  return updateObject(state, {
    pubDetail: action.pubDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PUBDETAIL_START:
      return fetchPubDetailStart(state, action);
    case actionTypes.FETCH_PUBDETAIL_SUCCESS:
      return fetchPubDetailFail(state, action);
    case actionTypes.FETCH_PUBDETAIL_FAIL:
      return fetchPubDetailSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
