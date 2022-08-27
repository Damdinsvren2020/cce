import * as actionTypes from "../../../actions/actionTypes";
import { updateObject } from "../../../utility";

const initialState = {
  cepubData: null,
  loading: true
};

const fetchCepubStart = (state, action) => {
  return updateObject(state);
};

const fetchCepubFail = (state, action) => {
  return updateObject(state);
};

const fetchCepubSuccess = (state, action) => {
  return updateObject(state, { 
    cepubData: action.cepubData,
    loading: false,
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CEPUB_START:
      return fetchCepubStart(state, action);
    case actionTypes.FETCH_CEPUB_SUCCESS:
      return fetchCepubSuccess(state, action);
    case actionTypes.FETCH_CEPUB_FAIL:
      return fetchCepubFail(state, action);
    default:
      return state;
  }
};

export default reducer;
