import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../service/apiService';

export const thunkQuestionsLoad = createAsyncThunk(
  'questionsSlice/thunkQuestionsLoad',
  async () => ApiService.fetchData()
);
