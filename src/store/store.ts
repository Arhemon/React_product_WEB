import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slice/actionRedux";
import clickSliceSignIn from "../Slice/actionRedux";
const store = configureStore({
  reducer: {
    signIn: clickSliceSignIn,
  },
});

export default store;
