import {
  ALL_BLOGS_SUCCESS,
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
} from "../constants/blogConstants";

import axios from "axios";

let baseUrl = "http://localhost:8000";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BLOGS_REQUEST });

    const { data } = await axios.get(`${baseUrl}/api/v1/getAllBlogs?search=`);

    console.log(data, "da");
    dispatch({
      type: ALL_BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_BLOGS_FAIL,
      payload: error.response,
    });
  }
};
