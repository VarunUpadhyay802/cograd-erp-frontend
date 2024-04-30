import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch class data from the API
export const fetchClasses = createAsyncThunk(
  'classes/fetchClasses',
  async () => {
    const response = await axios.get('http://localhost:4000/class/get', {
      withCredentials: true,
    });
    return response.data;
  }
);

const classSlice = createSlice({
  name: 'classes',
  initialState: {
    classesList: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetClasses: (state) => {
      state.classesList = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.classesList = action.payload;
        state.loading = false;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetClasses } = classSlice.actions;

export default classSlice.reducer;
