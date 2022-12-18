import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    mouseNavOver: false,
    scrollY: 0,
    scrollYPrev: 0,
    introAnimationIsFinish: false,
  },
  reducers: {
    mouseOver(state, action) {
      state.mouseNavOver = action.payload;
    },
    setScrollY(state, action) {
      state.scrollYPrev = state.scrollY;
      state.scrollY = action.payload;
    },
    setIntroAnimationIsFinish(state) {
      state.introAnimationIsFinish = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
