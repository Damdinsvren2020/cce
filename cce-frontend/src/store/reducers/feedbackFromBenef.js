import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  feedbackFromBenef: null,
  loading: true
};

const fetchFeedBackFromBenefStart = (state, action) => {
  return updateObject(state);
};

const fetchFeedBackFromBenefFail = (state, action) => {
  return updateObject(state);
};

const fetchFeedBackFromBenefSuccess = (state, action) => {
  return updateObject(state, { 
    feedbackFromBenef: action.feedbackFromBenef,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FEEDBACK_FROMBENEF_START:
      return fetchFeedBackFromBenefStart(state, action);
    case actionTypes.FETCH_FEEDBACK_FROMBENEF_SUCCESS:
      return fetchFeedBackFromBenefSuccess(state, action);
    case actionTypes.FETCH_FEEDBACK_FROMBENEF_FAIL:
      return fetchFeedBackFromBenefFail(state, action);
    default:
      return state;
  }
};

export default reducer;