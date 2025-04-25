import { Button } from "@/components/ui/button";
import StatusList from "./StatusList";
import useCourseDropdown from "../../hooks/useCourseDropdown";
import { useCourseDropdownStore } from "../../stores/useCourseDropdownStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  isNoteList: boolean;
};

export default function DesktopDropdown({ isNoteList }: Props) {
  const dropdownStatus = useCourseDropdownStore((state) => state.isLocked);
  const { open, courses, courseId, value, toggleCourse, setOpen, setValue } =
    useCourseDropdown(isNoteList);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Kurssi</p>
        {/* trigger = PopOverTrigger || DrawerTrigger */}
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={!isNoteList ? dropdownStatus : false}
            className={"w-[200px] justify-start"}
          >
            {value
              ? courses.find((course) => course.name === value)?.name
              : isNoteList
              ? "Kaikki"
              : "Valitse kurssi..."}
          </Button>
        </PopoverTrigger>
      </div>
      {/* Content = PopoverContent || DrawerContent */}
      <PopoverContent className={"w-[200px] p-0"} align="start">
        <StatusList
          setOpen={setOpen}
          setValue={setValue}
          toggleCourse={toggleCourse}
          isNoteList={isNoteList}
          courseId={courseId}
          courses={courses}
          value={value}
        />
      </PopoverContent>
    </Popover>
  );
}
