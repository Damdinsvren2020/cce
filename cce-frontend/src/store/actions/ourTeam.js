import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchOurTeamFail = (error) => {
  return {
    type: actionTypes.FETCH_OURTEAM_FAIL,
    error: error,
  };
};

export const fetchOurTeamStart = () => {
  return {
    type: actionTypes.FETCH_OURTEAM_START,
  };
};

export const fetchOurTeamSuccess = (data) => {
  return {
    type: actionTypes.FETCH_OURTEAM_SUCCESS,
    ourteamData: data,
  };
};

export const fetchOurTeam = (language) => {
  return (dispatch) => {
    dispatch(fetchOurTeamStart());
    axios
      .post("/ourteam/allLanguage", { language })
      .then((response) => {
        dispatch(fetchOurTeamSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchOurTeamFail(error));
      });
  };
};
