import _ from "lodash";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/types";

const INITIAL_STATE = {
  addedItems: [],
  total: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, addedItems: [...state.addedItems, action.shoe] };
    case REMOVE_ITEM:
      return { ...state, addedItems: _.omit(state, action.shoe) };
    default:
      return state;
  }
};
