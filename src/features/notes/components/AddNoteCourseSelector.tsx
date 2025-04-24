import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useNavigate, useParams, useSearchParams } from "react-router";
import { useDropdownMenuStore } from "../stores/useDropdownMenuStore";

export default function AddNoteCourseSelector() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams();
  const dropdownMenuState = useDropdownMenuStore((state) => state.isLocked);
  const courses = useCourseStore((state) => state.courses);
  const navigate = useNavigate();

  // apufunktio jotta sivun päivityksessä dropdown-valikko toimii
  React.useEffect(() => {
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

  // react-routerin reititys
  const toggleCourse = (id: number, name: string) => {
    if (id.toString() !== courseId) {
      navigate(`/notelist/${id}/addnewnote?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            disabled={dropdownMenuState}
          >
            {value || "Valitse kurssi..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Etsi kursseja..." className="h-9" />
            <CommandList>
              <CommandEmpty>Kursseja ei löytynyt.</CommandEmpty>
              <CommandGroup>
                {courses.map((course) => (
                  <CommandItem
                    key={course.id}
                    value={course.name}
                    onSelect={(currentValue) => {
                      const newValue = currentValue;
                      setValue(newValue);
                      toggleCourse(course.id, course.name);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === course.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {course.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
