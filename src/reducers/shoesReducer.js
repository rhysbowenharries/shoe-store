export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SHOES":
      return action.payload;
    default:
      return state;
  }
};
