import { createSlice } from "@reduxjs/toolkit";
export const namespace = "test";

const initialState = {
  valueAction: 0,
};

const slice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    get: (state) => {
      return {
        ...state,
      };
    },
    xxxx: (state, action) => {
      return {
        ...state,
        valueAction: state.valueAction + 1,
      };
    },
    yyyy: (state) => {
      return {
        ...state,
        valueAction: state.valueAction - 1,
      };
    },
  },
});
export const reducer = slice.reducer;

export const { get, xxxx, yyyy } = slice.actions;

export const testSelector = (state) => state[namespace];
