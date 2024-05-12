import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch school data from the API
export const fetchSchools = createAsyncThunk(
  'schools/fetchSchools',
  async () => {
    const response = await axios.get('http://localhost:4000/school/list');
    return response.data;
  }
);

const schoolSlice = createSlice({
  name: 'schools',
  initialState: {
    schoolList: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetSchools: (state) => {
      state.schoolList = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchools.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.schoolList = action.payload;
        state.loading = false;
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetSchools } = schoolSlice.actions;

export default schoolSlice.reducer;
