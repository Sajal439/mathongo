import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  setSelectedClass,
  setSelectedUnit,
  setSelectedStatus,
  setShowWeakChapters,
} from "@/redux/features/filtersSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const selectedSubject = useSelector(
    (state) => state.subjects.selectedSubject
  );
  const { selectedClass, selectedUnit, selectedStatus, showWeakChapters } =
    useSelector((state) => state.filters);
  const allChapters = useSelector((state) => state.subjects.allChapters);

  // Derive classes and units from the selected subject's chapters
  const classes = [
    ...new Set(
      allChapters
        .filter((c) => c.subject === selectedSubject)
        .map((c) => c.class)
    ),
  ];

  const units = [
    ...new Set(
      allChapters
        .filter((c) => c.subject === selectedSubject)
        .map((c) => c.unit)
    ),
  ];

  return (
    <div className="overflow-x-auto mb-6 pb-2 pt-2 pl-2">
      <div className="flex items-center gap-3 min-w-max">
        <Select
          value={selectedClass}
          onValueChange={(value) => dispatch(setSelectedClass(value))}
        >
          <SelectTrigger className="w-[90px] rounded-xl border-[#eaedf1] bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
            <SelectValue>
              {selectedClass === "all" ? "Class" : selectedClass}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border-[#eaedf1]">
            <SelectItem
              value="all"
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              All Classes
            </SelectItem>
            {classes &&
              classes.map((cls) => (
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

        <Select
          value={selectedUnit}
          onValueChange={(value) => dispatch(setSelectedUnit(value))}
        >
          <SelectTrigger className="w-[90px] rounded-xl border-[#eaedf1] bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
            <SelectValue>
              {selectedUnit === "all" ? "Units" : selectedUnit}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border-[#eaedf1]">
            <SelectItem
              value="all"
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              All Units
            </SelectItem>
            {units &&
              units.map((unit) => (
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
        <div className="h-5 w-px bg-[#eaedf1]"></div>
        <Button
          variant="outline"
          className={`whitespace-nowrap rounded-xl ${
            selectedStatus === "Not Started" ? "bg-gray-100" : ""
          } text-black font-normal border-[#eaedf1] hover:bg-gray-100 hover:border-gray-300 transition-colors`}
          onClick={() =>
            dispatch(
              setSelectedStatus(
                selectedStatus === "Not Started" ? "all" : "Not Started"
              )
            )
          }
        >
          Not Started
        </Button>

        <Button
          variant="outline"
          className={`whitespace-nowrap rounded-xl ${
            showWeakChapters ? "bg-[#fff5eb]" : ""
          } text-[#ff913a] border-[#ff913a] hover:bg-[#fff5eb] hover:border-[#ff8020] transition-colors`}
          onClick={() => dispatch(setShowWeakChapters(!showWeakChapters))}
        >
          Weak Chapters
        </Button>
      </div>
    </div>
  );
}
