import { createReducer } from "@reduxjs/toolkit";
const initialState = {};
export const userReducer = createReducer(initialState, {
  LOGIN_REQUEST: (state) => {
    state.loading = true;
  },
  LOGIN_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LOGIN_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LOGOUT_REQUEST: (state) => {
    state.loading = true;
  },
  LOGOUT_SUCCESS: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LOGOUT_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
});
