const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const baseUrl = 'https://blogplatformbackend.onrender.com';

export const getTopBlogs = createAsyncThunk('blog/gettop2', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/blogs/random/2`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

export const getRandom = createAsyncThunk('blog/random', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/blogs/random/3`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

export const getAllBlogs = createAsyncThunk('blog/all', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/blogs`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

export const getUserBlogs = createAsyncThunk('blog/user', async () => {
  try {
    const res = await fetch(`${baseUrl}/api/blogs/user`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

export const updateBlog = createAsyncThunk('blog/update', async (blog) => {
  try {
    const res = await fetch(`https://blogplatformbackend.onrender.com/api/blogs/update/${blog.id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      },
      body: JSON.stringify({
        img1: blog.img1,
        text: blog.text,
        title: blog.title
      })
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    top2: [],
    random: [],
    all: [],
    userBlogs: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopBlogs.fulfilled, (state, action) => {
      state.top2 = action.payload;
    })

    builder.addCase(getRandom.fulfilled, (state, action) => {
      state.random = action.payload;
    })

    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.all = action.payload;
    })

    builder.addCase(getUserBlogs.fulfilled, (state, action) => {
      state.userBlogs = action.payload;
    })

    builder.addCase(updateBlog.fulfilled, (state, action) => {
      return {...state, all: state.all.map(el => el._id === action.payload._id ? { img1: action.payload.img2, title: action.payload.title, text: action.payload.text } : el), top2: state.top2.map(el => el._id === action.payload._id ? { img1: action.payload.img2, title: action.payload.title, text: action.payload.text } : el), random: state.random.map(el => el._id === action.payload._id ? { img1: action.payload.img2, title: action.payload.title, text: action.payload.text } : el)}
    })
  }
})

export default blogSlice.reducer;