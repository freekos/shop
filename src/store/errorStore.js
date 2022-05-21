import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
}

const errorsStore = createSlice({
  name: "errors",
  initialState,
  reducers: {
    hasError(state, action) {
      state.isError = action.payload;
    }
  }
})

export const { hasError } = errorsStore.actions;
export default errorsStore.reducer;