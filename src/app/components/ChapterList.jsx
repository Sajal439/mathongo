import { Button } from "@/components/ui/button";
import ChapterCard from "./ChapterCard.jsx";
import { ArrowsDownUpIcon } from "@phosphor-icons/react";

export default function ChapterList({ filteredChapters }) {
  return (
    <>
      {/* Chapter List Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm md:text-base text-[#505d79] dark:text-gray-400 transition-colors">
          Showing {filteredChapters.length} chapters
        </p>
        <Button
          variant="ghost"
          className="text-[#0086ff] hover:text-[#0086ff] hover:bg-[#e1e8f5] dark:hover:bg-blue-900/20"
        >
          <ArrowsDownUpIcon size={16} />
          <span className="hidden sm:inline">Sort</span>
        </Button>
      </div>

      {/* Chapters List */}
      <div className="space-y-3">
        {filteredChapters.map((chapter, index) => (
          <ChapterCard key={index} chapter={chapter} />
        ))}

        {filteredChapters.length === 0 && (
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
