import { useSelector } from "react-redux";
import DesktopHeader from "./DesktopHeader.jsx";
import ChapterList from "./ChapterList.jsx";
import Filters from "./Filters.jsx";

export default function MainContent() {
  const selectedSubject = useSelector(
    (state) => state.subjects.selectedSubject
  );
  const filteredChapters = useSelector(
    (state) => state.subjects.filteredChapters
  );

  return (
    <div className="flex-1 p-4 md:p-8 overflow-auto bg-white border border-[#eaedf1] ">
      <DesktopHeader selectedSubject={selectedSubject} />
      <Filters />
      <ChapterList filteredChapters={filteredChapters} />
    </div>
  );
}
