import {
  ADD_TO_CART,
  REMOVE_ITEM,
  GET_PRICE,
  CHECKOUT_RENDER,
  ADD_PAYMENT_DETAILS,
} from "../actions/types";

const INITIAL_STATE = {
  addedItems: [],
  total: 0,
  checkoutRender: false,
  paymentDetails: { test: "test" },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, addedItems: [...state.addedItems, action.shoe] };
    case GET_PRICE:
      const newTotal = state.addedItems.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      return { ...state, total: newTotal };
    case REMOVE_ITEM:
      const newArray = state.addedItems.filter((shoe) => {
        return shoe !== action.shoe;
      });
      return { ...state, addedItems: newArray };
    case CHECKOUT_RENDER:
      return { ...state, checkoutRender: true };
    case ADD_PAYMENT_DETAILS:
      return {
        ...state,
        paymentDetails: action.formValues,
      };
    default:
      return state;
  }
};
