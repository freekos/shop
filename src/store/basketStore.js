import { createSlice } from "@reduxjs/toolkit";
import { basketAddChecker } from "./helper/basketAddChecker";
import { basketRemoveChecker } from "./helper/basketRemoveChecker";

const initialState = {
  basket: {},
};

const basketStore = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action) {
      basketAddChecker(state, action.payload);
    },
    removeProduct(state, action) {
      basketRemoveChecker(state, action.payload);
    },
    initialStateReplacer(state, action) {
      state.basket = action.payload;
    },
    fullRemoveProduct(state, action) {
      let product = action.payload;
      delete state.basket[product.id];
      let json = JSON.stringify(state.basket)
      sessionStorage.setItem('basket', json);
    },
    removeAll(state, action) {
      sessionStorage.setItem('basket', '');
      state.basket = {};
    },
  }
})

export const { addProduct, removeProduct, initialStateReplacer, removeAll, fullRemoveProduct } = basketStore.actions;
export default basketStore.reducer;