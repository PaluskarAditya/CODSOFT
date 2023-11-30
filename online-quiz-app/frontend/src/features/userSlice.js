const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

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
  isLogin: JSON.parse(localStorage.getItem('token')) ? true : false
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
  return data;
});

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
  reducers: {},
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
  }
})

export default userSlice.reducer;