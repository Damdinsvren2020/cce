import * as actionTypes from "../../../actions/actionTypes";
import { updateObject } from "../../../utility";

const initialState = {
  ecologiData: null,
  loading: true
};

const fetchEcologiStart = (state, action) => {
  return updateObject(state);
};

const fetchEcologiFail = (state, action) => {
  return updateObject(state);
};

const fetchEcologiSuccess = (state, action) => {
  return updateObject(state, { 
    ecologiData: action.ecologiData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ECOLOGI_START:
      return fetchEcologiStart(state, action);
    case actionTypes.FETCH_ECOLOGI_SUCCESS:
      return fetchEcologiSuccess(state, action);
    case actionTypes.FETCH_ECOLOGI_FAIL:
      return fetchEcologiFail(state, action);
    default:
      return state;
  }
};

export default reducer;
