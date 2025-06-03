import DesktopHeader from "./DesktopHeader";
import ChapterList from "./ChapterList";
import Filters from "./Filters";

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
    <div className="flex-1 p-4 md:p-8 overflow-auto bg-white">
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
