import { getSubjectIcon } from "@/lib/utils";
import { CaretRightIcon } from "@phosphor-icons/react";

export default function SubjectNavItem({
  subject,
  color,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={`${
        isSelected
          ? "bg-[#323b4c] text-white" // Dark background for selected item
          : "bg-white text-[#101319] hover:bg-[#f2f5fb]" // Light background for non-selected items
      } rounded-lg p-4 flex items-center justify-between cursor-pointer transition-colors`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-6 h-6 ${color} rounded-full flex items-center justify-center`}
        >
          {getSubjectIcon(subject)}
        </div>
        <span className="font-medium">{subject} PYQs</span>
      </div>
      <CaretRightIcon
        size={16}
        className={isSelected ? "text-white" : "text-[#101319]"}
      />
    </div>
  );
}
