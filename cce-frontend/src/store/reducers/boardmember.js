import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  boardmemberData: null,
  loading: true,
};

const fetchBoardMemberStart = (state, action) => {
  return updateObject(state);
};

const fetchBoardMemberFail = (state, action) => {
  return updateObject(state);
};

const fetchBoardMemberSuccess = (state, action) => {
  return updateObject(state, {
    boardmemberData: action.boardmemberData,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOARD_MEMBER_START:
      return fetchBoardMemberStart(state, action);
    case actionTypes.FETCH_BOARD_MEMBER_SUCCESS:
      return fetchBoardMemberSuccess(state, action);
    case actionTypes.FETCH_BOARD_MEMBER_FAIL:
      return fetchBoardMemberFail(state, action);
    default:
      return state;
  }
};

export default reducer;
