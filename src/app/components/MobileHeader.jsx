import {
  getSubjectIcon,
  getSubjectColor,
  getActiveTabStyles,
} from "@/lib/utils";
import { CheckCircleIcon } from "@phosphor-icons/react";

export default function MobileHeader({
  selectedSubject,
  selectSubjectAndClose,
}) {
  const subjects = ["Physics", "Chemistry", "Mathematics"];

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-center p-4 gap-3 mb-2">
        <div className="w-6 h-6 bg-[#ff913a] rounded-full flex items-center justify-center">
          <CheckCircleIcon size={16} className="text-white" />
        </div>
        <h1 className="text-xl font-semibold text-[#101319]">JEE Main</h1>
      </div>

      {/* Subject Navigation Tabs */}
      <div className="flex items-center bg-white border-b border-[#eaedf1] overflow-x-auto px-2">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => selectSubjectAndClose(subject)}
            className={`flex items-center gap-1 px-4 py-3 border-b-2 whitespace-nowrap transition-colors ${
              selectedSubject === subject
                ? getActiveTabStyles(subject)
                : "border-transparent text-[#505d79]"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center ${getSubjectColor(
                subject
              )}`}
            >
              {getSubjectIcon(subject, 12)}
            </div>
            <span className="text-sm font-medium">{subject}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
