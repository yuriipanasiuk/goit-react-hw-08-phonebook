import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut, refreshUser } from './operations';
import {
  userLogInSuccessReducer,
  userLogOutSuccessReducer,
  userRefreshSuccessReducer,
  userRegistrationSuccessReducer,
  pendingReducer,
  rejectedReducer,
} from 'redux/auth/reducers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registration.fulfilled, userRegistrationSuccessReducer)
      .addCase(logIn.fulfilled, userLogInSuccessReducer)
      .addCase(logOut.fulfilled, userLogOutSuccessReducer)
      .addCase(refreshUser.pending, pendingReducer)
      .addCase(refreshUser.fulfilled, userRefreshSuccessReducer)
      .addCase(refreshUser.rejected, rejectedReducer),
});

export const authReducer = authSlice.reducer;
