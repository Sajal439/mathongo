import DesktopHeader from "./DesktopHeader.jsx";
import ChapterList from "./ChapterList.jsx";
import Filters from "./Filters.jsx";

export default function MainContent({
  selectedSubject,
  selectedClass,
  setSelectedClass,
  selectedUnit,
  setSelectedUnit,
  selectedStatus,
  setSelectedStatus,
  showWeakChapters,
  setShowWeakChapters,
  classes,
  units,
  filteredChapters,
}) {
  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto bg-white border border-[#eaedf1] ">
      <DesktopHeader selectedSubject={selectedSubject} />

      <Filters
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
      />

      <ChapterList filteredChapters={filteredChapters} />
    </div>
  );
}
