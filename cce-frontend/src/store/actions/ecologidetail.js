import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchecologiFail = (error) => {
  return {
    type: actionTypes.FETCH_ECOLOGIDETAIL_FAIL,
    error: error,
  };
};

export const fetchecologiStart = () => {
  return {
    type: actionTypes.FETCH_ECOLOGIDETAIL_START,
  };
};

export const fetchecologiSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ECOLOGIDETAIL_SUCCESS,
    ecologiDetail: data,
  };
};

export const  fetchecologiDetail= (ecologiId) => {
  return (dispatch) => {
    dispatch( fetchecologiStart());
    axios
      .post("/EcologipublicationWeb/pubDetail", { ecologiId })
      .then((response) => {
        dispatch( fetchecologiSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchecologiFail(error));
      });
  };
};
