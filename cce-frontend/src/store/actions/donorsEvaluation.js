import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchDonorsEvaluationFail = (error) => {
  return {
    type: actionTypes.FETCH_DONORS_EVALUATION_FAIL,
    error: error,
  };
};

export const fetchDonorsEvaluationStart = () => {
  return {
    type: actionTypes.FETCH_DONORS_EVALUATION_START,
  };
};

export const fetchDonorsEvaluationSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DONORS_EVALUATION_SUCCESS,
    donorsEvaluationData: data,
  };
};

export const fetchDonorsEvaluation = () => {
  return (dispatch) => {
    dispatch(fetchDonorsEvaluationStart());
    axios
      .get("/donorsEvaluationWeb/getDonors")
      .then((response) => {
        dispatch(fetchDonorsEvaluationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDonorsEvaluationFail(error));
      });
  };
};
