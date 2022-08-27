import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  donorsEvaluationData: null,
  loading: true
};

const fetchDonorsEvaluationStart = (state, action) => {
  return updateObject(state);
};

const fetchDonorsEvaluationFail = (state, action) => {
  return updateObject(state);
};

const fetchDonorsEvaluationSuccess = (state, action) => {
  return updateObject(state, { 
    donorsEvaluationData: action.donorsEvaluationData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DONORS_EVALUATION_START:
      return fetchDonorsEvaluationStart(state, action);
    case actionTypes.FETCH_DONORS_EVALUATION_SUCCESS:
      return fetchDonorsEvaluationSuccess(state, action);
    case actionTypes.FETCH_DONORS_EVALUATION_FAIL:
      return fetchDonorsEvaluationFail(state, action);
    default:
      return state;
  }
};

export default reducer;