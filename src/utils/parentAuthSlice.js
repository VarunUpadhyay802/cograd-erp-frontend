import { createSlice } from "@reduxjs/toolkit";

const parentAuthSlice = createSlice({
  name: "parentAuth",
  initialState: {
    isAuthenticated: false,
    parentId: null,
    name: null,
    role: null,
    email: null,
  },
  reducers: {
    setParent: (state, action) => {
      state.isAuthenticated = true;
      state.parentId = action.payload._id;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.email = action.payload.email;
    },
    clearParent: (state) => {
      state.isAuthenticated = false;
      state.parentId = null;
      state.name = null;
      state.role = null;
      state.email = null;
    },
  },
});

export const { setParent, clearParent } = parentAuthSlice.actions;
export default parentAuthSlice.reducer;
