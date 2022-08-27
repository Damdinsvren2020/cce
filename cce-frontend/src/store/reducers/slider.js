import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  sliderData: null,
  loading: true,
};

const fetchSliderStart = (state, action) => {
  return updateObject(state);
};

const fetchSliderFail = (state, action) => {
  return updateObject(state);
};

const fetchSliderSuccess = (state, action) => {
  return updateObject(state, {
    sliderData: action.sliderData,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SLIDER_START:
      return fetchSliderStart(state, action);
    case actionTypes.FETCH_SLIDER_SUCCESS:
      return fetchSliderSuccess(state, action);
    case actionTypes.FETCH_SLIDER_FAIL:
      return fetchSliderFail(state, action);
    default:
      return state;
  }
};

export default reducer;
