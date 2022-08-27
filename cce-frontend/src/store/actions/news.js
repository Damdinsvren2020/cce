import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchNewsFail = (error) => {
  return {
    type: actionTypes.FETCH_NEWS_FAIL,
    error: error,
  };
};

export const fetchNewsStart = () => {
  return {
    type: actionTypes.FETCH_NEWS_START,
  };
};

export const fetchNewsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_NEWS_SUCCESS,
    newsData: data,
  };
};

export const fetchNews = (language) => {
  return (dispatch) => {
    dispatch(fetchNewsStart());
    axios
      .post("/newsweb/newslanguage", { language })
      .then((response) => {
        dispatch(fetchNewsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchNewsFail(error));
      });
  };
};
