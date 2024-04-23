import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    _id: null,
    schoolName: null,
    role: null,
    email: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state._id = action.payload._id;
      state.schoolName = action.payload.schoolName;
      state.role = action.payload.role;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.isAuthenticated = false;
      state._id = null;
      state.schoolName = null;
      state.role = null;
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
