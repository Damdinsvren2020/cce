import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchyouthdevelopmentFail = (error) => {
  return {
    type: actionTypes.FETCH_YOUTHDEVELOPMENTDETAIL_FAIL,
    error: error,
  };
};

export const fetchyouthdevelopmentStart = () => {
  return {
    type: actionTypes.FETCH_YOUTHDEVELOPMENTDETAIL_START,
  };
};

export const fetchyouthdevelopmentSuccess = (data) => {
  return {
    type: actionTypes.FETCH_YOUTHDEVELOPMENTDETAIL_SUCCESS,
    youthdevelopmentDetail: data,
  };
};

export const  fetchyouthdevelopmentDetail = (youthId) => {
  return (dispatch) => {
    dispatch( fetchyouthdevelopmentStart());
    axios
      .post("/youthWeb/pubDetail", { youthId })
      .then((response) => {
        dispatch( fetchyouthdevelopmentSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchyouthdevelopmentFail(error));
      });
  };
};
