const { createSlice, createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");

const baseUrl = 'http://localhost:7070'
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {
    id: "",
    name: "",
    username: "",
    email: ""
  },
  token: JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : "",
  userQuizes: [],
  isLogin: JSON.parse(localStorage.getItem('token')) ? true : false,
  error: null
}

export const login = createAsyncThunk('user/login', async (cred) => {
  const res = await fetch(`${baseUrl}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      uname: cred.uname,
      pass: cred.pass
    })
  });
  const data = await res.json();
  if (data.err) {
    throw new Error(data.err);
  }
  return data;
});

export const deleteQuiz = createAsyncThunk('user/quizdelete', async (id) => {
  const res = await fetch(`${baseUrl}/api/quiz/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": JSON.parse(localStorage.getItem('token'))
    }
  });
  const data = await res.json();
  return data;
})

export const createQuiz = createAsyncThunk('users/quizcreate', async (quiz) => {
  try {
    console.log("thunk:", quiz);
    const res = await fetch('http://localhost:7070/api/quiz/create', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": JSON.parse(localStorage.getItem('token'))
      },
      body: JSON.stringify({
        name: quiz.name,
        quiz_data: [
          quiz.questions.map(el => {
            return {
              quiz_text: el.text,
              quiz_answer: el.answer,
              quiz_options: el.options.map(opt => {
                return opt
              })
            }
          })
        ]
      })
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

export const getUserQuizes = createAsyncThunk('user/quizes', async () => {
  const res = await fetch(`${baseUrl}/api/quiz/myquizes`, {
    headers: {
      "Authorization": JSON.parse(localStorage.getItem('token'))
    }
  })
  const data = await res.json();
  return data;
})

export const register = createAsyncThunk('user/register', async (cred) => {
  const res = await fetch(`${baseUrl}/api/user/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      uname: cred.uname,
      pass: cred.pass,
      email: cred.email
    })
  });
  const data = await res.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    })

    builder.addCase(register.fulfilled, (state, action) => {
        state.isLogin = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', JSON.stringify(action.payload.token));
    })

    builder.addCase(getUserQuizes.fulfilled, (state, action) => {
      state.userQuizes = action.payload;
    })

    builder.addCase(deleteQuiz.fulfilled, (state, action) => {
      state.userQuizes = state.userQuizes.filter(el => el._id !== action.payload._id);
    })

    builder.addCase(createQuiz.fulfilled, (state, action) => {
      state.userQuizes.push(action.payload);
    })

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
    })
  }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;