import {
    ALL_BLOGS_SUCCESS,
    ALL_BLOGS_FAIL,
    ALL_BLOGS_REQUEST,
    GET_SINGLE_BLOG_FAIL,
    GET_SINGLE_BLOG_REQUEST,
    GET_SINGLE_BLOG_SUCCESS,
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

  export const singleBlogReducer =(state ={blog:{}}, action)=>{
    switch(action.type){
        case GET_SINGLE_BLOG_REQUEST:
            return {
                loading: true,
                blog: {}
            };

        case GET_SINGLE_BLOG_SUCCESS:
            return {
                loading: false,
                blog: action.payload.result
            };

        case GET_SINGLE_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
  };
  