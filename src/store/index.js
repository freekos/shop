import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userStore";
import errorReducer from "./errorStore";
import productsReducer from "./productsStore";
import basketReducer from "./basketStore";

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    products: productsReducer,
    basket: basketReducer,
  },
})