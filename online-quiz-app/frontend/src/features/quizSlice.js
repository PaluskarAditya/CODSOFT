import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = 'http://localhost:7070'

export const getAllQuizes = createAsyncThunk('quiz/all', async () => {
  const res = await fetch(`${baseUrl}/api/quiz/all`);
  const data = await res.json();
  return data;
})

const quizSlice = createSlice({
  name: "quiz",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllQuizes.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default quizSlice.reducer;