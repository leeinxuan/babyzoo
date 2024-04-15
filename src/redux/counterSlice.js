import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorMode: "light", 
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === "light" ? "dark" : "light";
    },
  },
});

export const selectColorMode = (state) => state.counter.colorMode; // 修正選擇器
export const { toggleColorMode } = counterSlice.actions;

export default counterSlice.reducer;