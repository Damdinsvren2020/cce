import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  PublicationDetail: null,
  loading: true,
};

const fetchPublicationDetailStart = (state, action) => {
  return updateObject(state);
};

const fetchPublicationDetailFail = (state, action) => {
  return updateObject(state);
};

const fetchPublicationDetailSuccess = (state, action) => {
  return updateObject(state, {
    PublicationDetail: action.PublicationDetail,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PUBLICATIONDETAIL_START:
      return fetchPublicationDetailStart(state, action);
    case actionTypes.FETCH_PUBLICATIONDETAIL_SUCCESS:
      return fetchPublicationDetailSuccess(state, action);
    case actionTypes.FETCH_PUBLICATIONDETAIL_FAIL:
      return fetchPublicationDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
