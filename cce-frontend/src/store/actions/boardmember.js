import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchBoardMemberFail = (error) => {
  return {
    type: actionTypes.FETCH_BOARD_MEMBER_FAIL,
    error: error,
  };
};

export const fetchBoardMemberStart = () => {
  return {
    type: actionTypes.FETCH_BOARD_MEMBER_START,
  };
};

export const fetchBoardMemberSuccess = (data) => {
  return {
    type: actionTypes.FETCH_BOARD_MEMBER_SUCCESS,
    boardmemberData: data,
  };
};

export const fetchBoardMember = (language) => {
  return (dispatch) => {
    dispatch(fetchBoardMemberStart());
    axios
      .post("/boardmember/allLanguage", { language })
      .then((response) => {
        dispatch(fetchBoardMemberSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBoardMemberFail(error));
      });
  };
};
