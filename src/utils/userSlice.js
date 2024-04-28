import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    _id: null,
    schoolName: null,
    role: null,
    email: null,
    isFetching: false, // Add isFetching field
    error: null, // Add error field
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state._id = action.payload._id;
      state.schoolName = action.payload.schoolName;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.isFetching = false; // Set isFetching to false after successful fetch
      state.error = null; // Reset error state
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state._id = null;
      state.schoolName = null;
      state.role = null;
      state.email = null;
      state.isFetching = false; // Reset isFetching state
      state.error = null; // Reset error state
    },
    fetchUserStart: (state) => {
      state.isFetching = true; // Set isFetching to true when fetching starts
      state.error = null; // Reset error state
    },
    fetchUserFailure: (state, action) => {
      state.isFetching = false; // Reset isFetching state
      state.error = action.payload; // Set error state with error message
    },
  },
});

export const { setUser, clearUser, fetchUserStart, fetchUserFailure } =
  userSlice.actions;
export default userSlice.reducer;
