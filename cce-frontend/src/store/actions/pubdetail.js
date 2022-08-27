import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchPubDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_PUBDETAIL_FAIL,
    error: error,
  };
};

export const fetchPubDetailStart = () => {
  return {
    type: actionTypes.FETCH_PUBDETAIL_START,
  };
};

export const fetchPubDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PUBDETAIL_SUCCESS,
    pubDetail: data,
  };
};

export const fetchPubDetail = () => {
  return (dispatch) => {
    dispatch(fetchPubDetailStart());
    axios
      .get("/publicationceWeb/pubDetail")
      .then((response) => {
        dispatch(fetchPubDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPubDetailFail(error));
      });
  };
};
