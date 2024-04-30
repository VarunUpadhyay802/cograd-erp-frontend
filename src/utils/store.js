import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import teacherSlice from "./teacherSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    teacher:teacherSlice,
  },
});

export default store;
