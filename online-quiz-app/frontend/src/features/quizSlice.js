import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = 'http://localhost:7070'

export const getAllQuizes = createAsyncThunk('quiz/all', async () => {
  const res = await fetch(`${baseUrl}/api/quiz/all`);
  const data = await res.json();
  return data;
})

export const randomQuizes = createAsyncThunk('quiz/random', async () => {
  const res = await fetch(`${baseUrl}/api/quiz/random/3`, {
    headers: {
      "Content-type": "application/json",
      "Authorization": JSON.parse(localStorage.getItem('token'))
    }
  });
  const data = await res.json();
  return data;
})

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    allquiz: [],
    topQuiz: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllQuizes.fulfilled, (state, action) => {
      state.allquiz = action.payload;
    })

    builder.addCase(randomQuizes.fulfilled, (state, action) => {
      state.topQuiz = action.payload;
    })
  }
})

export default quizSlice.reducer;