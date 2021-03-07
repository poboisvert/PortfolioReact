import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../components/Theme/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
