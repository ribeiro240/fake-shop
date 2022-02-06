import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case type === ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
