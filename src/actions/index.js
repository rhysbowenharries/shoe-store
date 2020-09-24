import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchShoes = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/shoes");

  dispatch({ type: "FETCH_SHOES", payload: response.data });
};
