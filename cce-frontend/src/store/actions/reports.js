import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchReportsPDFDataFail = (error) => {
  return {
    type: actionTypes.FETCH_REPORTS_PDFDATA_FAIL,
    error: error,
  };
};

export const fetchReportsPDFDataStart = () => {
  return {
    type: actionTypes.FETCH_REPORTS_PDFDATA_START,
  };
};

export const fetchReportsPDFDataSuccess = (data) => {
  return {
    type: actionTypes.FETCH_REPORTS_PDFDATA_SUCCESS,
    reportsPDFData: data,
  };
};

export const fetchReportsPDFData = () => {
  return (dispatch) => {
    dispatch(fetchReportsPDFDataStart());
    axios
      .get("/reportsWeb/all")
      .then((response) => {
        dispatch(fetchReportsPDFDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchReportsPDFDataFail(error));
      });
  };
};
