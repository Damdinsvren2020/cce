import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  participationDetail: null,
  loading: true,
};

const fetchParticipationDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchParticipationDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchParticipationDetailSuccess = (state, action) => {
  return updateObject(state, {
    participationDetail: action.participationDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARTICIPATION_START:
      return fetchParticipationDetailStart(state, action);
    case actionTypes.FETCH_PARTICIPATION_SUCCESS:
      return fetchParticipationDetailSuccess(state, action);
    case actionTypes.FETCH_PARTICIPATION_FAIL:
      return fetchParticipationDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
