import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchLanguageFail = (error) => {
  return {
    type: actionTypes.FETCH_LANGUAGE_FAIL,
    error: error,
  };
};

export const fetchLanguageStart = () => {
  return {
    type: actionTypes.FETCH_LANGUAGE_START,
  };
};

export const fetchLanguageSuccess = (data) => {
  return {
    type: actionTypes.FETCH_LANGUAGE_SUCCESS,
    language: data,
  };
};

export const fetchLanguage = (language) => {
  return (dispatch) => {
    dispatch(fetchLanguageSuccess(language));
  };
};
