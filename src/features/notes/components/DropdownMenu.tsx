import * as React from "react";
import { useEffect } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { useDropdownMenuStore } from "../stores/useDropdownMenuStore";
import Course from "@/features/courses/types/Course";

type Props = {
  isNotelist: boolean;
};

export function DropdownMenu({ isNotelist }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams();
  const dropdownMenuStatus = useDropdownMenuStore((state) => state.isLocked);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const courses = useCourseStore((state) => state.courses);
  const navigate = useNavigate();

  const toggleCourse = (course: Course, courseId?: string) => {
    const id = course.id.toString();
    const name = course.name;

    if (isNotelist && id === courseId) {
      navigate("/notelist");
    } else if (isNotelist) {
      navigate(`/notelist/${id}?name=${encodeURIComponent(name)}`);
    } else {
      navigate(`/notelist/${id}/addnewnote?name=${encodeURIComponent(name)}`);
    }
  };

  useEffect(() => {
    if (courseId) {
      const id = Number(courseId);
      const name = searchParams.get("name");
      if (name) {
        setValue(decodeURIComponent(name));
      } else {
        const course = courses.find((course) => course.id === id);
        if (course) {
          setValue(course.name);
        }
      }
    }
  }, [courseId, courses, searchParams]);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-muted-foreground">Kurssi</p>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              disabled={!isNotelist ? dropdownMenuStatus : false}
              className="w-[200px] justify-start"
            >
              {value
                ? courses.find((course) => course.name === value)?.name
                : isNotelist
                ? "Kaikki"
                : "Valitse kurssi..."}
            </Button>
          </PopoverTrigger>
        </div>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList
            setOpen={setOpen}
            setValue={setValue}
            toggleCourse={toggleCourse}
            isNotelist={isNotelist}
            courseId={courseId}
            courses={courses}
            value={value}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Kurssi</p>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={!isNotelist ? dropdownMenuStatus : false}
            className="w-[200px] justify-start"
          >
            {value
              ? courses.find((course) => course.name === value)?.name
              : isNotelist
              ? "Kaikki"
              : "Valitse kurssi..."}
          </Button>
        </DrawerTrigger>
      </div>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            setOpen={setOpen}
            setValue={setValue}
            toggleCourse={toggleCourse}
            isNotelist={isNotelist}
            courseId={courseId}
            courses={courses}
            value={value}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setValue,
  toggleCourse,
  isNotelist,
  courseId,
  courses,
  value,
}: {
  setOpen: (open: boolean) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  toggleCourse: (course: Course, courseId?: string) => void;
  isNotelist: boolean;
  courseId?: string;
  courses: Course[];
  value: string;
}) {
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
