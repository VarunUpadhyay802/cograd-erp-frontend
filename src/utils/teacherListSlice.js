import { createSlice } from '@reduxjs/toolkit';

// Initial state with default values
const initialState = {
  totalTeachers: 0,
  teacherList: [],
};

// Create the slice
const teacherListSlice = createSlice({
  name: 'teacherList',
  initialState,
  reducers: {
    setTeacherData(state, action) {
      // Update the state with the payload data
      state.totalTeachers = action.payload.totalTeachers;
      state.teacherList = action.payload.teacherList;
    },
  },
});

export const { setTeacherData } = teacherListSlice.actions;
export default teacherListSlice.reducer;
