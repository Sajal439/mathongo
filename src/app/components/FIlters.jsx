import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filters({
  selectedClass,
  setSelectedClass,
  selectedUnit,
  setSelectedUnit,
  selectedStatus,
  setSelectedStatus,
  showWeakChapters,
  setShowWeakChapters,
  classes,
  units,
}) {
  return (
    <div className="overflow-x-auto mb-6 pb-2">
      <div className="flex items-center gap-3 min-w-max">
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-[130px] rounded-full border-[#eaedf1] bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors">
            <SelectValue>
              {selectedClass === "all" ? "All Classes" : selectedClass}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border-[#eaedf1]">
            <SelectItem
              value="all"
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              All Classes
            </SelectItem>
            {classes.map((cls) => (
              <SelectItem
                key={cls}
                value={cls}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {cls}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedUnit} onValueChange={setSelectedUnit}>
          <SelectTrigger className="w-[130px] rounded-full border-[#eaedf1] bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors">
            <SelectValue>
              {selectedUnit === "all" ? "All Units" : selectedUnit}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border-[#eaedf1]">
            <SelectItem
              value="all"
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              All Units
            </SelectItem>
            {units.map((unit) => (
              <SelectItem
                key={unit}
                value={unit}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {unit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          className={`whitespace-nowrap rounded-full ${
            selectedStatus === "Not Started" ? "bg-gray-100" : ""
          } text-[#505d79] border-[#eaedf1] hover:bg-gray-100 hover:border-gray-300 transition-colors`}
          onClick={() =>
            setSelectedStatus(
              selectedStatus === "Not Started" ? "all" : "Not Started"
            )
          }
        >
          Not Started
        </Button>

        <Button
          variant="outline"
          className={`whitespace-nowrap rounded-full ${
            showWeakChapters ? "bg-[#fff5eb]" : ""
          } text-[#ff913a] border-[#ff913a] hover:bg-[#fff5eb] hover:border-[#ff8020] transition-colors`}
          onClick={() => setShowWeakChapters(!showWeakChapters)}
        >
          Weak Chapters
        </Button>
      </div>
    </div>
  );
}
