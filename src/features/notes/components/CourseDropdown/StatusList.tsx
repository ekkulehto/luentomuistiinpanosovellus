import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Course from "@/features/courses/types/Course";

type Props = {
  setOpen: (open: boolean) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  toggleCourse: (course: Course, courseId?: string) => void;
  isNotelist: boolean;
  courseId?: string;
  courses: Course[];
  value: string;
};

export default function StatusList({
  setOpen,
  setValue,
  toggleCourse,
  isNotelist,
  courseId,
  courses,
  value,
}: Props) {
  return (
    <Command>
      <CommandInput placeholder="Etsi kursseja..." />
      <CommandList>
        <CommandEmpty>Kursseja ei löytynyt.</CommandEmpty>
        <CommandGroup>
          {courses.map((course) => (
            <CommandItem
              key={course.id}
              value={course.name}
              onSelect={(currentValue) => {
                const newValue = !isNotelist
                  ? currentValue
                  : currentValue === value
                  ? ""
                  : currentValue;
                setValue(newValue);
                toggleCourse(course, courseId);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "h-4 w-4",
                  value === course.name ? "opacity-100" : "opacity-0"
                )}
              />
              {course.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
