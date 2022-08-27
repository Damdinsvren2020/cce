import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchSuccessStoriesFail = (error) => {
  return {
    type: actionTypes.FETCH_SUCCESS_STORIES_FAIL,
    error: error,
  };
};

export const fetchSuccessStoriesStart = () => {
  return {
    type: actionTypes.FETCH_SUCCESS_STORIES_START,
  };
};

export const fetchSuccessStoriesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SUCCESS_STORIES_SUCCESS,
    successStoriesData: data,
  };
};

export const fetchSuccessStories = () => {
  return (dispatch) => {
    dispatch(fetchSuccessStoriesStart());
    axios
      .get("/storiesweb/allstories")
      .then((response) => {
        dispatch(fetchSuccessStoriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchSuccessStoriesFail(error));
      });
  };
};
