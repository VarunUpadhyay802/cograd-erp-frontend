import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    isAuthenticated: false,
    studentId: null,
    name: null,
    role: null,
    email: null,
    isFetching: false, // Add isFetching field
    error: null, // Add error field
  },
  reducers: {
    setStudent: (state, action) => {
      state.isAuthenticated = true;
      state.studentId = action.payload._id;
      state.role = action.payload.role;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isFetching = false; // Set isFetching to false after successful fetch
      state.error = null; // Reset error state
    },
    clearStudent: (state) => {
      state.isAuthenticated = false;
      state.studentId = null;
      state.name = null;
      state.role = null;
      state.email = null;
      state.isFetching = false; // Reset isFetching state
      state.error = null; // Reset error state
    },
    fetchStudentStart: (state) => {
      state.isFetching = true; // Set isFetching to true when fetching starts
      state.error = null; // Reset error state
    },
    fetchStudentFailure: (state, action) => {
      state.isFetching = false; // Reset isFetching state
      state.error = action.payload; // Set error state with error message
    },
  },
});

export const {
  setStudent,
  clearStudent,
  fetchStudentStart,
  fetchStudentFailure,
} = studentSlice.actions;
export default studentSlice.reducer;
