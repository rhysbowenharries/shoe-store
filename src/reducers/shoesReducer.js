import _ from "lodash";
import {
  FETCH_SHOES,
  FETCH_SHOE,
  CREATE_SHOE,
  EDIT_SHOE,
  DELETE_SHOE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SHOES:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_SHOE:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_SHOE:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_SHOE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_SHOE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
