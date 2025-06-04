import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedClass: "all",
  selectedUnit: "all",
  selectedStatus: "all",
  showWeakChapters: false,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedClass: (state, action) => {
      state.selectedClass = action.payload;
    },
    setSelectedUnit: (state, action) => {
      state.selectedUnit = action.payload;
    },
    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    setShowWeakChapters: (state, action) => {
      state.showWeakChapters = action.payload;
    },
  },
});

export const {
  setSelectedClass,
  setSelectedUnit,
  setSelectedStatus,
  setShowWeakChapters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
