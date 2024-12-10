import { configureStore } from "@reduxjs/toolkit";
import mySliceReducer from "./mySlice";
const store = configureStore({
  reducer: { mySliceReducer },
});

export default store;
