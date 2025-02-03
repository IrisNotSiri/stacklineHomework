import { configureStore } from '@reduxjs/toolkit';
import salesReducer from '../features/sales/salesSlice';

export const store = configureStore({
  reducer: {
    sales: salesReducer,
  },
});
