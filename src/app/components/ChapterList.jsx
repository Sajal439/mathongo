import { Button } from "@/components/ui/button";
import ChapterCard from "./ChapterCard.jsx";
import {
  ArrowsDownUpIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortChapters } from "@/lib/utils";

export default function ChapterList({ filteredChapters }) {
  const [sortedChapters, setSortedChapters] = useState([...filteredChapters]);
  const [sortMethod, setSortMethod] = useState("default");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    setSortedChapters([...filteredChapters]);
  }, [filteredChapters]);

  const handleSort = (method) => {
    const newDirection =
      method === sortMethod && sortDirection === "asc" ? "desc" : "asc";

    if (method !== sortMethod) {
      setSortMethod(method);
      setSortDirection("asc");
    } else {
      setSortDirection(newDirection);
    }

    const newSortedChapters = sortChapters(
      filteredChapters,
      method,
      method === sortMethod ? newDirection : "asc"
    );

    setSortedChapters(newSortedChapters);
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
        <p className="text-sm md:text-base text-[#505d79] dark:text-gray-400 transition-colors">
          Showing {filteredChapters.length} chapters
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-[#0086ff] hover:text-[#0086ff] hover:bg-[#e1e8f5] dark:hover:bg-blue-900/20 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
            >
              <ArrowsDownUpIcon size={16} className="mr-1.5" />
              <span className="hidden sm:inline">Sort</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white border-[#eaedf1]">
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] hover:text-[#0086ff] transition-colors"
              onClick={() => handleSort("name")}
            >
              <span>Chapter Name</span>
              {getSortIcon("name")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] hover:text-[#0086ff] transition-colors"
              onClick={() => handleSort("questionsSolved")}
            >
              <span>Questions Solved</span>
              {getSortIcon("questionsSolved")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] hover:text-[#0086ff] transition-colors"
              onClick={() => handleSort("weakChapters")}
            >
              <span>Weak Chapters</span>
              {getSortIcon("weakChapters")}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex justify-between items-center cursor-pointer hover:bg-[#f5f8ff] hover:text-[#0086ff] transition-colors"
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
          <div className="bg-white dark:bg-gray-800 border border-[#eaedf1] dark:border-gray-700 rounded-lg p-8 text-center transition-colors">
            <p className="text-[#505d79] dark:text-gray-400">
              No chapters match your filters
            </p>
          </div>
        )}
      </div>
    </>
  );
}
