import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  totalFees: 0,
  totalPaidAmount: 0,
  remainingAmount: 0,
  totalFeesDetails: [],
  totalFeesPaidDetails: [],
  parentDetails: null,
  error: false,
};

export const fetchFeesDetails = createAsyncThunk(
  "parents/fetchFeesDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/parent/feesDetails/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchParentDetails = createAsyncThunk(
  "parents/fetchParentDetails",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/parent/getDetails/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const parentSlice = createSlice({
  name: "parents",
  initialState,
  reducers: {
    resetParents: (state) => {
      state.status = "idle";
      state.totalFees = 0;
      state.totalPaidAmount = 0;
      state.remainingAmount = 0;
      state.totalFeesDetails = [];
      state.totalFeesPaidDetails = [];
      state.parentDetails = null;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeesDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFeesDetails.fulfilled, (state, action) => {
        state.status = "idle";
        state.remainingAmount = action.payload.remainingAmount;
        state.totalFees = action.payload.totalFees;
        state.totalPaidAmount = action.payload.totalPaidAmount;
        state.totalFeesDetails = action.payload.totalFeesDetails;
        state.totalFeesPaidDetails = action.payload.totalFeesPaidDetails;
      })
      .addCase(fetchFeesDetails.rejected, (state) => {
        state.error = true;
      })
      .addCase(fetchParentDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchParentDetails.fulfilled, (state, action) => {
        state.parentDetails = action.payload;
        state.status = "idle";
      })
      .addCase(fetchParentDetails.rejected, (state) => {
        state.error = true;
      });
  },
});

export const { resetParents } = parentSlice.actions;
export default parentSlice.reducer;
