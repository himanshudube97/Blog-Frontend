import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
      };
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
