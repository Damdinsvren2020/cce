import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  reportsPDFData: null,
  loading: true
};

const fetchReportsPDFDataStart = (state, action) => {
  return updateObject(state);
};

const fetchReportsPDFDataFail = (state, action) => {
  return updateObject(state);
};

const fetchReportsPDFDataSuccess = (state, action) => {
  return updateObject(state, { 
    reportsPDFData: action.reportsPDFData,
    loading: false
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPORTS_PDFDATA_START:
      return fetchReportsPDFDataStart(state, action);
    case actionTypes.FETCH_REPORTS_PDFDATA_SUCCESS:
      return fetchReportsPDFDataSuccess(state, action);
    case actionTypes.FETCH_REPORTS_PDFDATA_FAIL:
      return fetchReportsPDFDataFail(state, action);
    default:
      return state;
  }
};

export default reducer;