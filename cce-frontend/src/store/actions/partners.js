import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchPartnersFail = (error) => {
  return {
    type: actionTypes.FETCH_PARTNERS_FAIL,
    error: error,
  };
};

export const fetchPartnersStart = () => {
  return {
    type: actionTypes.FETCH_PARTNERS_START,
  };
};

export const fetchPartnersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PARTNERS_SUCCESS,
    partnersData: data,
  };
};

export const fetchPartners = () => {
  return (dispatch) => {
    dispatch(fetchPartnersStart());
    axios
      .get("/partnersWeb/partners")
      .then((response) => {
        dispatch(fetchPartnersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPartnersFail(error));
      });
  };
};
