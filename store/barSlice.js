import { createSlice } from "@reduxjs/toolkit";
const BarSlice = createSlice({
  name: "bar",
  initialState: { title: "Categories" },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export default BarSlice;

export const barAction = BarSlice.actions;
