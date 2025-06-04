import { sortChapters } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  sortMethod: "default",
  sortDirection: "asc",
  sortedChapters: [],
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    setSortMethod: (state, action) => {
      state.sortMethod = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    updateSort: (state, action) => {
      const method = action.payload;
      const newDirection =
        method === state.sortMethod && state.sortDirection === "asc"
          ? "desc"
          : "asc";

      if (method !== state.sortMethod) {
        state.sortMethod = method;
        state.sortDirection = "asc";
      } else {
        state.sortDirection = newDirection;
      }
    },
    updateSortedChapters: (state, action) => {
      const chapters = action.payload;
      state.sortedChapters = sortChapters(
        chapters,
        state.sortMethod,
        state.sortDirection
      );
    },
  },
});

export const {
  toggleSidebar,
  setSidebarOpen,
  setSortMethod,
  setSortDirection,
  updateSort,
  updateSortedChapters,
} = uiSlice.actions;

export default uiSlice.reducer;
