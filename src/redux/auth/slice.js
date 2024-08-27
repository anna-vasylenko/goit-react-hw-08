import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = null;
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected),
        (state, action) => {
          state.isError = action.payload;
        }
      )
      .addMatcher(isAnyOf(register.pending, logIn.pending), (state) => {
        state.isError = false;
      });
  },
});

export const authReducer = authSlice.reducer;
