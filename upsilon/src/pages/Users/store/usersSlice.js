import { userAPI } from '../api/userApi';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk('users/fetchUsers',
async (params, {dispatch}) => {
    const result = await userAPI.fetchUsersTest(dispatch);
    return result;
})

export const usersSlice = createSlice({
    name: "users",
    initialState: {
      users: [],
      error: ''
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = [...action.payload]
      })
    },
});

export const { 
  fetchUserSuccess,
  fetchUserError
} = usersSlice.actions;

export default usersSlice.reducer;