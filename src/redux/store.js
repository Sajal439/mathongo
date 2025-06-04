import { configureStore } from "@reduxjs/toolkit";
import subjectsReducer from "./features/subjectSlice";
import filtersReducer from "./features/filtersSlice";
import uiReducer from "./features/uiSlice";

export const store = configureStore({
  reducer: {
    subjects: subjectsReducer,
    filters: filtersReducer,
    ui: uiReducer,
  },
});
