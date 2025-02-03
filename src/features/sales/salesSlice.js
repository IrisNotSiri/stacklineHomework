import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import salesData from '../../data/salesData.json';

export const fetchSalesData = createAsyncThunk(
  'sales/fetchSalesData',
  async () => {
    // const response = await fetch('/salesData.json');
    // console.log({response})
    // const data = await response.json();
    // return data[0];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(salesData[0]);
      }, 500); 
    });
  }
);

const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    productInfo: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSalesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productInfo = action.payload;
      })
      .addCase(fetchSalesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default salesSlice.reducer;

