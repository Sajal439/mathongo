import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"; // Remove useState import
import { Button } from "@/components/ui/button";
import ChapterCard from "./ChapterCard.jsx";
import {
  ArrowsDownUpIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateSort, updateSortedChapters } from "@/redux/features/uiSlice";

export default function ChapterList({ filteredChapters }) {
  const dispatch = useDispatch();
  const { sortMethod, sortDirection, sortedChapters } = useSelector(
    (state) => state.ui
  );

  // Update sorted chapters in Redux when filters or sort options change
  useEffect(() => {
    dispatch(updateSortedChapters(filteredChapters));
  }, [dispatch, filteredChapters, sortMethod, sortDirection]);

  const handleSort = (method) => {
    dispatch(updateSort(method));
  };

  const getSortIcon = (method) => {
    if (sortMethod !== method) return null;
    return sortDirection === "asc" ? (
      <CaretUpIcon size={14} />
    ) : (
      <CaretDownIcon size={14} />
    );
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm md:text-base text-[#141313] transition-colors">
          Showing all chapters ({filteredChapters.length})
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-[#0086ff] hover:bg-[#e1e8f5]  focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
            >
              <ArrowsDownUpIcon size={16} className="mr-1.5" />
              <span className="hidden sm:inline">Sort</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white border-[#eaedf1]">
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] transition-colors"
              onClick={() => handleSort("name")}
            >
              <span>Chapter Name</span>
              {getSortIcon("name")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] transition-colors"
              onClick={() => handleSort("questionsSolved")}
            >
              <span>Questions Solved</span>
              {getSortIcon("questionsSolved")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] transition-colors"
              onClick={() => handleSort("weakChapters")}
            >
              <span>Weak Chapters</span>
              {getSortIcon("weakChapters")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] transition-colors"
              onClick={() => handleSort("progress")}
            >
              <span>Progress</span>
              {getSortIcon("progress")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-3">
        {sortedChapters.map((chapter, index) => (
          <ChapterCard key={index} chapter={chapter} />
        ))}

        {sortedChapters.length === 0 && (
          <div className="bg-white  border-[#eaedf1]  rounded-lg p-8 text-center transition-colors">
            <p className="text-[#505d79] ">
              No chapters match your filters
            </p>
          </div>
        )}
      </div>
    </>
  );
}
