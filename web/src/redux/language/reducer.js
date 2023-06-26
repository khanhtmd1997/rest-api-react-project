import { createSlice } from "@reduxjs/toolkit";
export const namespace = "language";

const initialState = {
  langDefault: "vi",
};

const slice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    getLang: (state) => {
      return {
        ...state,
      };
    },
    setLang: (state, action) => {
      return {
        ...state,
        langDefault: action.payload,
      };
    },
    resetLang: (state) => {
      return {
        ...state,
        langDefault: "vi",
      };
    },
  },
});
export const reducer = slice.reducer;

export const { getLang, setLang, resetLang } = slice.actions;

export const languageSelector = (state) => state[namespace];
