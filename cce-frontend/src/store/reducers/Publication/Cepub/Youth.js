import * as actionTypes from "../../../actions/actionTypes";
import { updateObject } from "../../../utility";

const initialState = {
  youthData: null,
  loading: true
};

const fetchYouthStart = (state, action) => {
  return updateObject(state);
};

const fetchYouthFail = (state, action) => {
  return updateObject(state);
};

const fetchYouthSuccess = (state, action) => {
  return updateObject(state, { 
    youthData: action.youthData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_YOUTH_START:
      return fetchYouthStart(state, action);
    case actionTypes.FETCH_YOUTH_SUCCESS:
      return fetchYouthSuccess(state, action);
    case actionTypes.FETCH_YOUTH_FAIL:
      return fetchYouthFail(state, action);
    default:
      return state;
  }
};

export default reducer;
