"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileHeader from "./MobileHeader.jsx";
import MainContent from "./MainContent.jsx";
import Sidebar from "./Sidebar.jsx";
import { toggleSidebar, setSidebarOpen } from "@/redux/features/uiSlice";
import { setSelectedSubject, updateFilteredChapters } from "@/redux/features/subjectSlice.js";

export default function Component() {
  const dispatch = useDispatch();
  const selectedSubject = useSelector(
    (state) => state.subjects.selectedSubject
  );
  const { selectedClass, selectedUnit, selectedStatus, showWeakChapters } =
    useSelector((state) => state.filters);
  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  // Update filtered chapters when filters change
  useEffect(() => {
    dispatch(
      updateFilteredChapters({
        selectedClass,
        selectedUnit,
        selectedStatus,
        showWeakChapters,
      })
    );
  }, [
    dispatch,
    selectedSubject,
    selectedClass,
    selectedUnit,
    selectedStatus,
    showWeakChapters,
  ]);

  // Function to select subject and close sidebar on mobile
  const selectSubjectAndClose = (subject) => {
    dispatch(setSelectedSubject(subject));
    dispatch(setSidebarOpen(false));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white relative">
      <MobileHeader
        selectedSubject={selectedSubject}
        toggleSidebar={() => dispatch(toggleSidebar())}
        selectSubjectAndClose={selectSubjectAndClose}
      />

      <Sidebar
        selectedSubject={selectedSubject}
        selectSubjectAndClose={selectSubjectAndClose}
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => dispatch(toggleSidebar())}
      />

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      <MainContent />
    </div>
  );
}
