import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchNewsDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_NEWSDETAIL_FAIL,
    error: error,
  };
};

export const fetchNewsDetailStart = () => {
  return {
    type: actionTypes.FETCH_NEWSDETAIL_START,
  };
};

export const fetchNewsDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_NEWSDETAIL_SUCCESS,
    newsDetail: data,
  };
};

export const fetchNewsDetail = (newsId) => {
  return (dispatch) => {
    dispatch(fetchNewsDetailStart());
    axios
      .post("/newsWeb/newsDetail", { newsId })
      .then((response) => {
        dispatch(fetchNewsDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchNewsDetailFail(error));
      });
  };
};
