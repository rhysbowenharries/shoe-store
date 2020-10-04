import _ from "lodash";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  GET_PRICE,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/types";

const INITIAL_STATE = {
  addedItems: [
    {
      _id: "5f6cdc2f3b8ad3d86be491db",
      title: "Beat Dogs",
      description: "Keep the beat",
      price: 12.8,
      brand: "Kickers",
      category: "W sports",
      quantity: 1,
    },
    {
      _id: "5f7190862b29d909c06ff8ba",
      title: "ds-lite",
      description: "Hi that stuff",
      price: 60.5,
      quantity: 11,
      brand: "Nike",
      category: "M casual",
    },
  ],
  total: 0,
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
    default:
      return state;
  }
};
