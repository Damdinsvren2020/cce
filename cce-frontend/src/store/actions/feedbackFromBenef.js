import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchFeedBackFromBenefFail = (error) => {
  return {
    type: actionTypes.FETCH_FEEDBACK_FROMBENEF_FAIL,
    error: error,
  };
};

export const fetchFeedBackFromBenefStart = () => {
  return {
    type: actionTypes.FETCH_FEEDBACK_FROMBENEF_START,
  };
};

export const fetchFeedBackFromBenefSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FEEDBACK_FROMBENEF_SUCCESS,
    feedbackFromBenef: data,
  };
};

export const fetchFeedbackFromBenef = () => {
  return (dispatch) => {
    dispatch(fetchFeedBackFromBenefStart());
    axios
      .get("/feedBackFromBenefWeb/all")
      .then((response) => {
        dispatch(fetchFeedBackFromBenefSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFeedBackFromBenefFail(error));
      });
  };
};
