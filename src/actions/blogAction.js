import {
  ALL_BLOGS_SUCCESS,
  ALL_BLOGS_FAIL,
  ALL_BLOGS_REQUEST,
  GET_SINGLE_BLOG_FAIL,
  GET_SINGLE_BLOG_REQUEST,
  GET_SINGLE_BLOG_SUCCESS,
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

export const getSingleBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_BLOG_REQUEST });

    const { data } = await axios.get(`${baseUrl}/api/v1/getSingleBlog/${id}`);
    console.log(data, "DATAHAIYEBHAI")
    dispatch({
      type: GET_SINGLE_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_BLOG_FAIL,
      payload: error.response,
    });
  }
};
