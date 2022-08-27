import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchParticipationDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_PARTICIPATION_FAIL,
    error: error,
  };
};

export const fetchParticipationDetailStart = () => {
  return {
    type: actionTypes.FETCH_PARTICIPATION_START,
  };
};

export const fetchParticipationDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PARTICIPATION_SUCCESS,
    participationDetail: data,
  };
};

export const fetchParticipationDetail = (parId) => {
  return (dispatch) => {
    dispatch(fetchParticipationDetailStart());
    axios
      .post("/participationWeb/pubdetail", { parId })
      .then((response) => {
        dispatch(fetchParticipationDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchParticipationDetailFail(error));
      });
  };
};
