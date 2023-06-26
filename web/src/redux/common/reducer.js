import { createSlice } from "@reduxjs/toolkit";
export const namespace = "common";

const initialState = {
  collapsed: false,
  isChangeData: false,
  currentPath: "/",
};

const slice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    getCollapsed: (state) => {
      return {
        ...state,
      };
    },
    setCollapsed: (state, action) => {
      return {
        ...state,
        collapsed: action.payload,
      };
    },
    setChangedData: (state, action) => {
      return {
        ...state,
        isChangeData: action.payload,
      };
    },
    setCurrentPath: (state, action) => {
      return {
        ...state,
        currentPath: action.payload,
      };
    },
  },
});
export const reducer = slice.reducer;

export const { getCollapsed, setCollapsed, setChangedData, setCurrentPath } =
  slice.actions;

export const commonSelector = (state) => state[namespace];
