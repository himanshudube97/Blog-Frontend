import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants";

import axios from "axios";

let baseUrl = "http://localhost:8000";
let token = localStorage.getItem("token");

export const getUserDetails = ()=> async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { data } = await axios.get(`${baseUrl}/api/v1/getUserDetails`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(data, "data");
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error, "error");
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response,
    });
  }
};
