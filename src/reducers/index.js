import { combineReducers } from "redux";
import shoesReducer from "./shoesReducer";

export default combineReducers({
  shoes: shoesReducer,
});
