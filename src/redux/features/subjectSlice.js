import { createSlice } from "@reduxjs/toolkit";
import chapterData from "@/app/data/all_subjects_chapter_data.json";

const initialState = {
  selectedSubject: "Physics",
  allChapters: chapterData.allSubjectsChapterData,
  filteredChapters: [],
};

export const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    setSelectedSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
    updateFilteredChapters: (state, action) => {
      const { selectedClass, selectedUnit, selectedStatus, showWeakChapters } =
        action.payload;

      state.filteredChapters = state.allChapters.filter((chapter) => {
        return (
          chapter.subject === state.selectedSubject &&
          (selectedClass === "all" || chapter.class === selectedClass) &&
          (selectedUnit === "all" || chapter.unit === selectedUnit) &&
          (selectedStatus === "all" || chapter.status === selectedStatus) &&
          (!showWeakChapters || chapter.isWeakChapter)
        );
      });
    },
  },
});

export const { setSelectedSubject, updateFilteredChapters } =
  subjectsSlice.actions;

export default subjectsSlice.reducer;
