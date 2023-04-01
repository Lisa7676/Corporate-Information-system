import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import usersSlice from '../../pages/Users/store/usersSlice';
import loadingScreen from './loadingScreen';

export default configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer:{
      user: userSliceReducer,
      users: usersSlice,
      loading: loadingScreen
    }
});