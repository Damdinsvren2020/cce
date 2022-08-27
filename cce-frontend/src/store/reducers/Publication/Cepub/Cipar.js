import * as actionTypes from "../../../actions/actionTypes";
import { updateObject } from "../../../utility";

const initialState = {
  ciparData: null,
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
    ciparData: action.ciparData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CIPAR_START:
      return fetchCepubStart(state, action);
    case actionTypes.FETCH_CIPAR_SUCCESS:
      return fetchCepubSuccess(state, action);
    case actionTypes.FETCH_CIPAR_FAIL:
      return fetchCepubFail(state, action);
    default:
      return state;
  }
};

export default reducer;
