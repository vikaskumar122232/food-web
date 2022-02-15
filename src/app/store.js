import { configureStore } from '@reduxjs/toolkit';
import bodyReducer from '../features/bodySlice';

export const store = configureStore({
  reducer: {
    body: bodyReducer,
  },
});