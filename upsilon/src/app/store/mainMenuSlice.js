import { createSlice } from "@reduxjs/toolkit";

export const mainMenuSlice = createSlice({
    name: "menu",
    initialState: {
      open: false,
    },
    reducers:{
        toggleMenu: (state) => {
          state.open = !state.open;
        }
    }
});

export const { toggleMenu } = mainMenuSlice.actions;

export default mainMenuSlice.reducer;