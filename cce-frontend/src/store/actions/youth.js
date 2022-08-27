import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchYouthFail = (error) => {
  return {
    type: actionTypes.FETCH_YOUTH_FAIL,
    error: error,
  };
};

export const fetchYouthStart = () => {
  return {
    type: actionTypes.FETCH_YOUTH_START,
  };
};

export const fetchYouthSuccess = (data) => {
  return {
    type: actionTypes.FETCH_YOUTH_SUCCESS,
    youthData: data,
  };
};

export const fetchYouth = () => {
  return (dispatch) => {
    dispatch(fetchYouthStart());
    axios
      .get("/youthWeb/youthdevelopment")
      .then((response) => {
        dispatch(fetchYouthSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchYouthFail(error));
      });
  };
};
