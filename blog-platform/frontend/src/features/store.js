import authReducer from "./authSlice";
import blogReducer from "./blogSlice";
import commentReducer from "./commentSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    auth: authReducer,
    comment: commentReducer,
    blog: blogReducer
  }
})

export default store;
