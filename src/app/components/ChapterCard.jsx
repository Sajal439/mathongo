import { getChapterIcon, getChapterTotal, getChapterStats } from "@/lib/utils";
export default function ChapterCard({ chapter }) {
  return (
    <div className="bg-white  border-[#eaedf1] border-[1.5px] rounded-lg p-3 md:p-4 hover:shadow-sm  transition-all">
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
        <div className="flex flex-wrap items-center ml-7 sm:ml-0">
          <span className="text-[#505d79] transition-colors py-1">
            {getChapterStats(chapter)}
          </span>

          <div className="h-4 w-px bg-[#eaedf1] mx-3 self-center"></div>

          <span
            className={`font-medium py-1 ${
              (chapter.questionSolved || 0) > 0
                ? "text-[#0086ff]"
                : "text-[#505d79] dark:text-gray-400"
            } transition-colors`}
          >
            {getChapterTotal(chapter)}
          </span>
        </div>
      </div>
    </div>
  );
}
