"use client";

import { getSubjectIcon, getSubjectColor } from "@/lib/utils";

export default function DesktopHeader({ selectedSubject }) {
  return (
    <div className="hidden md:block mb-8">
      <div className="flex flex-col items-center text-center relative">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${getSubjectColor(
              selectedSubject
            )}`}
          >
            {getSubjectIcon(selectedSubject)}
          </div>
          <h1 className="text-2xl font-semibold text-[#101319]">
            {selectedSubject} PYQs
          </h1>
        </div>
        <p className="text-[#505d79]">
          Chapter-wise Collection of {selectedSubject} PYQs
        </p>
      </div>
    </div>
  );
}
