import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import {
  AtomIcon,
  FlaskIcon,
  MathOperationsIcon,
  PulseIcon,
  RulerIcon,
  ScalesIcon,
} from "@phosphor-icons/react";
import { RotateCcw, BookOpen } from "lucide-react";

// Helper function to get appropriate icon for each chapter
export const getChapterIcon = (chapter) => {
  if (chapter.chapter.includes("Motion")) {
    return <PulseIcon size={16} className="text-[#505d79]" />;
  } else if (chapter.chapter.includes("Dimensions")) {
    return <RulerIcon size={16} className="text-[#505d79]" />;
  } else if (chapter.chapter.includes("Math")) {
    return <PulseIcon size={16} className="text-[#505d79]" />;
  } else if (chapter.chapter.includes("Laws")) {
    return <ScalesIcon size={16} className="text-[#505d79]" />;
  } else if (chapter.chapter.includes("Rotation")) {
    return <RotateCcw className="w-4 h-4 text-[#505d79]" />;
  } else if (chapter.chapter.includes("Gravitation")) {
    return <div className="w-4 h-4 rounded-full bg-[#ff913a]" />;
  } else if (
    chapter.chapter.includes("Centre") ||
    chapter.chapter.includes("Center")
  ) {
    return <div className="w-4 h-4 rounded-full bg-[#0086ff]" />;
  } else {
    return <BookOpen className="w-4 h-4 text-[#505d79]" />;
  }
};

// Calculate the stats for each chapter (comparing 2025 vs 2024)
export const getChapterStats = (chapter) => {
  const questions2025 = chapter.yearWiseQuestionCount?.["2025"] || 0;
  const questions2024 = chapter.yearWiseQuestionCount?.["2024"] || 0;

  let trend = "";
  let trendColour = "";
  if (questions2025 > questions2024) {
    trend = " ↑";
    trendColour = "text-green-500";
  } else if (questions2025 < questions2024) {
    trend = " ↓";
    trendColour = "text-red-500";
  }

  return (
    <span>
      2025: {questions2025}Qs
      {trend && <span className={trendColour}>{trend}</span>} | 2024:{" "}
      {questions2024}Qs
    </span>
  );
};

// Calculate total questions for each chapter
export const getChapterTotal = (chapter) => {
  const totalQuestions = Object.values(
    chapter.yearWiseQuestionCount || {}
  ).reduce((sum, count) => sum + count, 0);
  return `${chapter.questionSolved || 0}/${totalQuestions} Qs`;
};

export const getSubjectColor = (subject) => {
  switch (subject) {
    case "Physics":
      return "bg-[#ff913a]";
    case "Chemistry":
      return "bg-[#37b24d]";
    case "Mathematics":
      return "bg-[#0086ff]";
    default:
      return "bg-[#ff913a]";
  }
};

export const getSubjectIcon = (subject, size = 16) => {
  switch (subject) {
    case "Physics":
      return <AtomIcon size={size} className="text-white" />;
    case "Chemistry":
      return <FlaskIcon size={size} className="text-white" />;
    case "Mathematics":
      return <MathOperationsIcon size={size} className="text-white" />;
    default:
      return null;
  }
};

export const getActiveTabStyles = (subject) => {
  switch (subject) {
    case "Physics":
      return "border-[#ff913a] text-[#ff913a]";
    case "Chemistry":
      return "border-[#37b24d] text-[#37b24d]";
    case "Mathematics":
      return "border-[#0086ff] text-[#0086ff]";
    default:
      return "border-[#0086ff] text-[#0086ff]";
  }
};

export function sortChapters(chapters, method, direction) {
  const sortedChapters = [...chapters];

  switch (method) {
    case "name":
      sortedChapters.sort((a, b) => {
        const comparison = a.chapter.localeCompare(b.chapter);
        return direction === "asc" ? comparison : -comparison;
      });
      break;

    case "questionsSolved":
      sortedChapters.sort((a, b) => {
        const aValue = a.questionSolved || 0;
        const bValue = b.questionSolved || 0;
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      });
      break;

    case "weakChapters":
      sortedChapters.sort((a, b) => {
        // Sort weak chapters first or last based on direction
        if (a.isWeakChapter && !b.isWeakChapter)
          return direction === "asc" ? -1 : 1;
        if (!a.isWeakChapter && b.isWeakChapter)
          return direction === "asc" ? 1 : -1;
        return 0;
      });
      break;

    case "progress":
      sortedChapters.sort((a, b) => {
        const aProgress = (a.questionSolved || 0) / (a.totalQuestions || 1);
        const bProgress = (b.questionSolved || 0) / (b.totalQuestions || 1);
        return direction === "asc"
          ? aProgress - bProgress
          : bProgress - aProgress;
      });
      break;

    default:
      break;
  }

  return sortedChapters;
}
