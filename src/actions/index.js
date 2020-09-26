import Localhost from "../apis/localhost:8000";
import { SIGN_IN, SIGN_OUT, FETCH_SHOES } from "./types";

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
