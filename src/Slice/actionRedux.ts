import { createAction, createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
};
const clickSliceSignIn = createSlice({
  name: "clickSignIn",
  initialState: {
    signIn: false,
  },
  reducers: {
    clickSignIn(state, action) {
      state.signIn = true;
    },
    clickLogOut(state, action) {
      state.signIn = action.payload;
    },
  },
});

const clickSliceLike = createSlice({
  name: "clickLike",
  initialState: {
    likes: 0,
    dislikes: 0,
  },
  reducers: {
    clickLike: (state) => {
      state.likes++;
    },
    clickDislike: (state) => {
      state.dislikes++;
    },
  },
});
export const { clickSignIn, clickLogOut } = clickSliceSignIn.actions;

export const { clickLike, clickDislike } = clickSliceLike.actions;

export default clickSliceSignIn.reducer;
