import { combineReducers } from "redux";
import authReducer from "./authReducer";
import shoesReducer from "./shoesReducer";

export default combineReducers({
  shoes: shoesReducer,
  auth: authReducer,
});
