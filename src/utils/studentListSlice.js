import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state with default values
const initialState = {
  status: "idle",
  studentList: [],
  schoolStudentList: [],
  selectedStudent: null,
  error: false,
};

export const fetchStudentList = createAsyncThunk(
  "students/fetchStudents",
  async (id) => {
    const response = await axios.get(
      `http://localhost:4000/student/studentList/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

export const fetchSchoolStudentList = createAsyncThunk(
  "students/fetchSchoolStudents",
  async () => {
    const response = await axios.get("http://localhost:4000/student/get/list", {
      withCredentials: true,
    });
    console.log("fetching school students");
    return response.data;
  }
);

// Create the slice
const studentListSlice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    resetStudentList: (state) => {
      // Update the state with the payload data
      state.studentList = [];
      state.status = "idle";
      state.selectedStudent = null;
      state.schoolStudentList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentList.fulfilled, (state, action) => {
        state.studentList = action.payload;
        state.status = "idle";
      })
      .addCase(fetchStudentList.rejected, (state) => {
        state.status = "idle";
        state.error = true;
      })
      .addCase(fetchSchoolStudentList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSchoolStudentList.fulfilled, (state, action) => {
        state.schoolStudentList = action.payload;
        state.status = "idle";
      })
      .addCase(fetchSchoolStudentList.rejected, (state) => {
        state.status = "idle";
        state.error = true;
      });
  },
});

export const { resetStudentList } = studentListSlice.actions;
export default studentListSlice.reducer;
