import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import teacherSlice from "./teacherSlice";
import classSlice from "./classSlice";
import studentListSlice from "./studentListSlice";
import parentSlice from "./parentSlice";
import parentAuthSlice from "./parentAuthSlice";
import schoolSlice from "./schoolSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userSlice,
    teachers: teacherSlice,
    classes: classSlice,
    studentList: studentListSlice,
    parents: parentSlice,
    parentAuth: parentAuthSlice,
    schools: schoolSlice,
  },
});

export default store;
