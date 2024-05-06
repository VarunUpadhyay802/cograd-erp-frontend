import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import teacherSlice from './teacherSlice';
import classSlice from './classSlice';
// import studentsByClassSlice from './studentsByClassSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    teachers: teacherSlice,
    classes: classSlice,
    // studentByClass:studentsByClassSlice
  },
});

export default store;
