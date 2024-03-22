import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Slice/actionRedux";

const store = configureStore({
  reducer: reducer,
});

export default store;
