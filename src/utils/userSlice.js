import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    userId: null,
    name: null,
    role: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.userId = action.payload._id;
      state.name = action.payload.schoolName;
      state.role = action.payload.role;
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.name = null;
      state.role = null;
    },
  },
});
