import { createSlice } from "@reduxjs/toolkit";
export const namespace = "user";

const initialState = {
  user: null,
};

const slice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    getUser: (state) => {
      return {
        ...state,
      };
    },
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});
export const reducer = slice.reducer;

export const { getUser, setUser } = slice.actions;

export const userSelector = (state) => state[namespace];
