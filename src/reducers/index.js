import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import shoesReducer from "./shoesReducer";

export default combineReducers({
  shoes: shoesReducer,
  auth: authReducer,
  form: formReducer,
});
