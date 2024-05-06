import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import teacherSlice from './teacherSlice';
import classSlice from './classSlice';
import studentListSlice from './studentListSlice'; 

import teacherListSlice from './teacherListSlice'; 

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userSlice,
    teachers: teacherSlice,
    classes: classSlice,
    studentList: studentListSlice,
    teacherList: teacherListSlice,
  },
});

export default store;
