import axios from "axios";
import { GET_ALL_DEVELOPER } from "./types";

export const getAllDeveloper = orgName => async dispatch => {
      const res = await axios.get(`/api/users/developers/${orgName}`);
      dispatch({
        type: GET_ALL_DEVELOPER,
        payload: res.data
      });
  };