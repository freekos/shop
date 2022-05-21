import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
}

const userStore = createSlice({
  name: "user",
  initialState,
  reducers: {
      Auth(state, action) {
        state.isAuth = action.payload;
      }
    }
})

export const { Auth } = userStore.actions;
export default userStore.reducer;