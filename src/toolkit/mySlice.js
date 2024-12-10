import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Mohamed",
};

const mySlice = createSlice({
  name: "MySlice",
  initialState,
  reducers: {
    changeName: (state) => {
      return { ...state, name: "Anwar" };
    },
  },
});

export const { changeName } = mySlice.actions;
export default mySlice.reducer;
