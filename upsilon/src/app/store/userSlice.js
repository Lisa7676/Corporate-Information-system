import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
      userName: null,
      isAuth: false
  },
  reducers: {
      setUser: (state, action) => {
        state.isAuth = action.payload.isAuth;
        state.userName = action.payload.userName;
      },
      doRecovery: (state, action) => {
        state.login = action.payload.login;
        state.code = action.payload.code;
      },
  }
});

export const { setUser, doRecovery } = userSlice.actions;

export default userSlice.reducer;