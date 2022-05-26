import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from "jwt-decode";


const token = localStorage.getItem("token") || "" 
let user;
if (token) { 
  user = jwt_decode(token)
} 

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: token ? true : false,
    token: token ? token : "",
    user: user ? user : {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.user = {};
    },
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer;