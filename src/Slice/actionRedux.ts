import { createAction, createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: true,
};
const clickSliceSignIn = createSlice({
  name: "clickSignIn",
  initialState: {
    signIn: [] as { isLoggedIn: boolean }[],
  },
  reducers: {
    clickSignIn(state, action) {
      state.signIn.push({ isLoggedIn: action.payload });
    },
  },
});

export const clickSignIn = createAction<boolean>("clickSignIn"); // Принимаем аргумент типа boolean

export default clickSliceSignIn.reducer;
