import { useCourseDropdownStore } from "../../stores/useCourseDropdownStore";
import { Button } from "@/components/ui/button";
import StatusList from "./StatusList";
import useCourseDropdown from "../../hooks/useCourseDropdown";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

type Props = {
  isNoteList: boolean;
};

export default function MobileDropdown({ isNoteList }: Props) {
  const dropdownStatus = useCourseDropdownStore((state) => state.isLocked);
  const { open, courses, courseId, value, toggleCourse, setOpen, setValue } =
    useCourseDropdown(isNoteList);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Kurssi</p>
        {/* trigger = PopOverTrigger || DrawerTrigger */}
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={!isNoteList ? dropdownStatus : false}
            className={"justify-start"}
          >
            {value
              ? courses.find((course) => course.name === value)?.name
              : isNoteList
              ? "Kaikki"
              : "Valitse kurssi..."}
          </Button>
        </DrawerTrigger>
      </div>
      {/* Content = PopoverContent || DrawerContent */}
      <DrawerContent className={"mt-4 border-t"}>
        <DrawerHeader>
          <DrawerTitle>Kurssivalikko</DrawerTitle>
          <DrawerDescription>
            Etsi kursseja tai valitse jokin alla olevista.
          </DrawerDescription>
        </DrawerHeader>
        <StatusList
          setOpen={setOpen}
          setValue={setValue}
          toggleCourse={toggleCourse}
          isNoteList={isNoteList}
          courseId={courseId}
          courses={courses}
          value={value}
        />
      </DrawerContent>
    </Drawer>
  );
}
