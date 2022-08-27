import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ecologiDetail: null,
  loading: true,
};

const fetchecologiDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchecologiDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchecologiDetailSuccess = (state, action) => {
  return updateObject(state, {
    ecologiDetail: action.ecologiDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ECOLOGIDETAIL_START:
      return fetchecologiDetailStart(state, action);
    case actionTypes.FETCH_ECOLOGIDETAIL_SUCCESS:
      return fetchecologiDetailSuccess(state, action);
    case actionTypes.FETCH_ECOLOGIDETAIL_FAIL:
      return fetchecologiDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;