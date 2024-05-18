import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './questions/questionsSlice';

export const store = configureStore({
  reducer: {
    apiSlice: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
