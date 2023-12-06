import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProds = createAsyncThunk('products/get', async () => {
  try {
    const res = await fetch(`${window.location.origin}/data.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
})

const productSlice = createSlice({
  name: "products",
  initialState: {
    all: [],
    current: {}
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProds.fulfilled, (state, action) => {
      state.all = action.payload;
    })
  }
})

export const { setCurrent } = productSlice.actions;
export default productSlice.reducer;