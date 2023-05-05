import {
    ALL_BLOGS_SUCCESS,
    ALL_BLOGS_FAIL,
    ALL_BLOGS_REQUEST
  } from "../constants/blogConstants";
  
  export const blogsReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
      case ALL_BLOGS_REQUEST:
        return {
          loading: true,
          blogs: []
        };
  
      case ALL_BLOGS_SUCCESS:
        return {
          loading: false,
          blogs: action.payload.result
        };
  
      case ALL_BLOGS_FAIL:
        return {
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  