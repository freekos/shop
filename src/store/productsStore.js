import { createSlice } from "@reduxjs/toolkit";
import data from "../data/Products.json";

const initialState = data;

const productsStore = createSlice({
  name:"products",
  initialState,
  reducers: {
  }
})

export default productsStore.reducer;