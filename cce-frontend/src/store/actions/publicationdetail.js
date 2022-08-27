import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchPublicationDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_PUBLICATIONDETAIL_FAIL,
    error: error,
  };
};

export const fetchPublicationDetailStart = () => {
  return {
    type: actionTypes.FETCH_PUBLICATIONDETAIL_START,
  };
};

export const fetchPublicationDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PUBLICATIONDETAIL_SUCCESS,
    PublicationDetail: data,
  };
};

export const  fetchPublicationDetail = (pubId) => {
  return (dispatch) => {
    dispatch( fetchPublicationDetailStart());
    axios
      .post("/publicationceWeb/pubDetail", { pubId })
      .then((response) => {
        dispatch( fetchPublicationDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPublicationDetailFail(error));
      });
  };
};
