import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  youthdevelopmentDetail: null,
  loading: true,
};

const fetchyouthdevelopmentDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchyouthdevelopmentDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchyouthdevelopmentDetailSuccess = (state, action) => {
  return updateObject(state, {
    youthdevelopmentDetail: action.youthdevelopmentDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_YOUTHDEVELOPMENTDETAIL_START:
      return fetchyouthdevelopmentDetailStart(state, action);
    case actionTypes.FETCH_YOUTHDEVELOPMENTDETAIL_SUCCESS:
      return fetchyouthdevelopmentDetailSuccess(state, action);
    case actionTypes.FETCH_YOUTHDEVELOPMENTDETAIL_FAIL:
      return fetchyouthdevelopmentDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
