import { createSlice } from '@reduxjs/toolkit';

// Initial state with default values
const initialState = {
  totalStudents: 0,
  studentList: [],
};

// Create the slice
const studentListSlice = createSlice({
  name: 'studentList',
  initialState,
  reducers: {
    setStudentData(state, action) {
      // Update the state with the payload data
      state.totalStudents = action.payload.totalStudents;
      state.studentList = action.payload.studentList;
    },
  },
});

export const { setStudentData } = studentListSlice.actions;
export default studentListSlice.reducer;
