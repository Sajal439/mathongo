"use client";

import { useState } from "react";
import chapterData from "@/app/data/all_subjects_chapter_data.json";
import MobileHeader from "./MobileHeader";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

export default function Component() {
  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedUnit, setSelectedUnit] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showWeakChapters, setShowWeakChapters] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter chapters based on selected filters
  const filteredChapters = chapterData.allSubjectsChapterData.filter(
    (chapter) => {
      return (
        chapter.subject === selectedSubject &&
        (selectedClass === "all" || chapter.class === selectedClass) &&
        (selectedUnit === "all" || chapter.unit === selectedUnit) &&
        (selectedStatus === "all" || chapter.status === selectedStatus) &&
        (!showWeakChapters || chapter.isWeakChapter)
      );
    }
  );

  // Get unique classes and units for the selected subject for filter dropdowns
  const classes = [
    ...new Set(
      chapterData.allSubjectsChapterData
        .filter((c) => c.subject === selectedSubject)
        .map((c) => c.class)
    ),
  ];

  const units = [
    ...new Set(
      chapterData.allSubjectsChapterData
        .filter((c) => c.subject === selectedSubject)
        .map((c) => c.unit)
    ),
  ];

  // Function to toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to select subject and close sidebar on mobile
  const selectSubjectAndClose = (subject) => {
    setSelectedSubject(subject);
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white relative">
      <MobileHeader
        selectedSubject={selectedSubject}
        toggleSidebar={toggleSidebar}
        selectSubjectAndClose={selectSubjectAndClose}
      />

      <Sidebar
        selectedSubject={selectedSubject}
        selectSubjectAndClose={selectSubjectAndClose}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40"
          onClick={toggleSidebar}
        />
      )}

      <MainContent
        selectedSubject={selectedSubject}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        showWeakChapters={showWeakChapters}
        setShowWeakChapters={setShowWeakChapters}
        classes={classes}
        units={units}
        filteredChapters={filteredChapters}
      />
    </div>
  );
}
