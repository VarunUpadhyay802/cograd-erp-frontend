import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import teacherSlice from './teacherSlice';
import classSlice from './classSlice'; 

const store = configureStore({
  reducer: {
    user: userSlice,
    teachers: teacherSlice,
    classes: classSlice, 
  },
});

export default store;
