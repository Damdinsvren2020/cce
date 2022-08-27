import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchSliderFail = (error) => {
  return {
    type: actionTypes.FETCH_SLIDER_FAIL,
    error: error,
  };
};

export const fetchSliderStart = () => {
  return {
    type: actionTypes.FETCH_SLIDER_START,
  };
};

export const fetchSliderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SLIDER_SUCCESS,
    sliderData: data,
  };
};

export const fetchSlider = () => {
  return (dispatch) => {
    dispatch(fetchSliderStart());
    axios
      .get("/sliderweb/all")
      .then((response) => {
        dispatch(fetchSliderSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchSliderFail(error));
      });
  };
};
