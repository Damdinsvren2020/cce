import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  partnersData: null,
  loading: true
};

const fetchPartnersStart = (state, action) => {
  return updateObject(state);
};

const fetchPartnersFail = (state, action) => {
  return updateObject(state);
};

const fetchPartnersSuccess = (state, action) => {
  return updateObject(state, { 
     partnersData: action.partnersData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARTNERS_START:
      return fetchPartnersStart(state, action);
    case actionTypes.FETCH_PARTNERS_SUCCESS:
      return fetchPartnersSuccess(state, action);
    case actionTypes.FETCH_PARTNERS_FAIL:
      return fetchPartnersFail(state, action);
    default:
      return state;
  }
};

export default reducer;