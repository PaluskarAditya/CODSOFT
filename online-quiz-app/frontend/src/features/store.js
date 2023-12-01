import quizReducer from "./quizSlice";
import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer
  }
})

export default store;