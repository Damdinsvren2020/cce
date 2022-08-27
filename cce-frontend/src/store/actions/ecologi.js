import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchEcologiFail = (error) => {
  return {
    type: actionTypes.FETCH_ECOLOGI_FAIL,
    error: error,
  };
};

export const fetchEcologiStart = () => {
  return {
    type: actionTypes.FETCH_ECOLOGI_START,
  };
};

export const fetchEcologiSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ECOLOGI_SUCCESS,
    ecologiData: data,
  };
};

export const fetchEcologi = () => {
  return (dispatch) => {
    dispatch(fetchEcologiStart());
    axios
      .get("/EcologipublicationWeb/publicationecologi")
      .then((response) => {
        dispatch(fetchEcologiSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchEcologiFail(error));
      });
  };
};
