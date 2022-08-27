import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchCepubFail = (error) => {
  return {
    type: actionTypes.FETCH_CEPUB_FAIL,
    error: error,
  };
};

export const fetchCepubStart = () => {
  return {
    type: actionTypes.FETCH_CEPUB_START,
  };
};

export const fetchCepubSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CEPUB_SUCCESS,
    cepubData: data,
  };
};

export const fetchCepub = () => {
  return (dispatch) => {
    dispatch(fetchCepubStart());
    axios
      .get("/publicationceWeb/publicationceall")
      .then((response) => {
        dispatch(fetchCepubSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCepubFail(error));
      });
  };
};
