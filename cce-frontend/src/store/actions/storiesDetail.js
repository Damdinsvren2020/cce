import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchStoriesDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_STORIESDETAIL_FAIL,
    error: error,
  };
};

export const fetchStoriesDetailStart = () => {
  return {
    type: actionTypes.FETCH_STORIESDETAIL_START,
  };
};

export const fetchStoriesDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_STORIESDETAIL_SUCCESS,
    storiesDetail: data,
  };
};

export const fetchStoriesDetail = (storiesId) => {
  return (dispatch) => {
    dispatch(fetchStoriesDetailStart());
    axios
      .post("/storiesweb/storiesDetail", { storiesId })
      .then((response) => {
        dispatch(fetchStoriesDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchStoriesDetailFail(error));
      });
  };
};
