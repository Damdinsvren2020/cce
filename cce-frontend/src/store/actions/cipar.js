import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchCiparFail = (error) => {
  return {
    type: actionTypes.FETCH_CIPAR_FAIL,
    error: error,
  };
};

export const fetchCiparStart = () => {
  return {
    type: actionTypes.FETCH_CIPAR_START,
  };
};

export const fetchCiparSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CIPAR_SUCCESS,
    ciparData: data,
  };
};

export const fetchCipar = () => {
  return (dispatch) => {
    dispatch(fetchCiparStart());
    axios
      .get("participationWeb/publicationpartiall",)
      .then((response) => {
        dispatch(fetchCiparSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCiparFail(error));
      });
  };
};
