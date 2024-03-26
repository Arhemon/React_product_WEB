import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slice/actionRedux";
import clickSliceSignIn from "../Slice/actionRedux";
import clickSliceLike from "../Slice/actionRedux";

const store = configureStore({
  reducer: {
    signIn: clickSliceSignIn,
    clickLike: clickSliceLike,
  },
});

export default store;
