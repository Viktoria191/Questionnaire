import { createSlice } from '@reduxjs/toolkit';
import { thunkQuestionsLoad } from './createAsyncThunk';

// Define the initial state using that type
const initialState = {
  questions: [],
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkQuestionsLoad.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default questionsSlice.reducer;
