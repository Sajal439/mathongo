import { Button } from "@/components/ui/button";
import SubjectNavItem from "./SubjectNavItem";
import { CheckCircleIcon, XCircleIcon } from "@phosphor-icons/react";

export default function Sidebar({
  selectedSubject,
  selectSubjectAndClose,
  sidebarOpen,
}) {
  return (
    <div
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block fixed md:relative inset-0 z-50 md:z-0 md:w-80 bg-[#f2f5fb] p-6 border-r border-[#eaedf1] overflow-auto`}
    >
      {/* JEE Main Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 bg-[#ff913a] rounded-full flex items-center justify-center">
            <CheckCircleIcon size={16} className="text-white" />
          </div>
          <h1 className="text-xl font-semibold text-[#101319]">JEE Main</h1>
        </div>
        <p className="text-sm text-[#505d79] ml-9">
          2025 - 2009 | 173 Papers | 15825 Qs
        </p>
      </div>

      {/* Subject Navigation */}
      <div className="space-y-2">
        <SubjectNavItem
          subject="Physics"
          color="bg-[#ff913a]"
          isSelected={selectedSubject === "Physics"}
          onClick={() => selectSubjectAndClose("Physics")}
        />

        <SubjectNavItem
          subject="Chemistry"
          color="bg-[#37b24d]"
          isSelected={selectedSubject === "Chemistry"}
          onClick={() => selectSubjectAndClose("Chemistry")}
        />

        <SubjectNavItem
          subject="Mathematics"
          color="bg-[#0086ff]"
          isSelected={selectedSubject === "Mathematics"}
          onClick={() => selectSubjectAndClose("Mathematics")}
        />
      </div>
    </div>
  );
}
