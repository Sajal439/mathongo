import { getChapterIcon, getChapterTotal, getChapterStats } from "@/lib/utils";
import { LightningIcon } from "@phosphor-icons/react";

export default function ChapterCard({ chapter }) {
  return (
    <div className="bg-white  border-[#eaedf1]  rounded-lg p-3 md:p-4 hover:shadow-sm  transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          {getChapterIcon(chapter)}
          <span className="font-medium text-[#101319]  text-sm md:text-base transition-colors">
            {chapter.chapter}
          </span>
          {chapter.isWeakChapter && (
            <span className="text-xs bg-[#fff5eb] text-[#ff913a] px-2 py-0.5 rounded-full">
              Weak
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm ml-7 sm:ml-0">
          <span className="text-[#505d79] transition-colors">
            {getChapterStats(chapter)}
          </span>
          <span
            className={`font-medium ${
              (chapter.questionSolved || 0) > 0
                ? "text-[#0086ff]"
                : "text-[#505d79] dark:text-gray-400"
            } transition-colors`}
          >
            {getChapterTotal(chapter)}
          </span>
          {chapter.status === "Completed" && (
            <LightningIcon size={16} color="green" />
          )}
        </div>
      </div>
    </div>
  );
}
