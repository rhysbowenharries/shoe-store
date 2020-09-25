import Localhost from "../apis/localhost:8000";

export const fetchShoes = () => async (dispatch) => {
  const response = await Localhost.get("/shoes");

  dispatch({ type: "FETCH_SHOES", payload: response.data });
};
