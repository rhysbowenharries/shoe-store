import Localhost from "../apis/localhost:8000";
import shoesReducer from "../reducers/shoesReducer";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_SHOES,
  CREATE_SHOE,
  FETCH_SHOE,
  DELETE_SHOE,
  EDIT_SHOE,
} from "./types";

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchShoes = () => async (dispatch) => {
  const response = await Localhost.get("/shoes");

  dispatch({ type: FETCH_SHOES, payload: response.data });
};

export const fetchShoe = (id) => async (dispatch) => {
  const response = await Localhost.get(`/shoes/${id}`);

  dispatch({ type: FETCH_SHOE, payload: response.data });
};

export const createShoe = (formValues) => async (dispatch) => {
  const response = await Localhost.post("/shoes", formValues);

  dispatch({ type: CREATE_SHOE, payload: response.data });
};

export const editShoe = (id, formValues) => async (dispatch) => {
  const response = await Localhost.put(`/shoes/${id}`, formValues);

  dispatch({ type: EDIT_SHOE, payload: response.data });
};

export const deleteShoe = (id) => async (dispatch) => {
  await Localhost.delete(`/shoes/${id}`);

  dispatch({ type: DELETE_SHOE, payload: id });
};
