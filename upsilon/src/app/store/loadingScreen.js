import { createSlice } from "@reduxjs/toolkit";

export const loadingScreen = createSlice({
  name: "loading",
  initialState: {
      isLoading: false
  },
  reducers: {
    setLoading: (state) => {
        state.isLoading = !state.isLoading;
      }
  }
});

export const { setLoading } = loadingScreen.actions;

export default loadingScreen.reducer;