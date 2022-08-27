import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  storiesDetail: null,
  loading: true,
};

const fetchStoriesDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchStoriesDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchStoriesDetailSuccess = (state, action) => {
  return updateObject(state, {
    storiesDetail: action.storiesDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STORIESDETAIL_START:
      return fetchStoriesDetailStart(state, action);
    case actionTypes.FETCH_STORIESDETAIL_SUCCESS:
      return fetchStoriesDetailSuccess(state, action);
    case actionTypes.FETCH_STORIESDETAIL_FAIL:
      return fetchStoriesDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
