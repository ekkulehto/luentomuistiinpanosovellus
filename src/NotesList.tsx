import * as React from "react";
import { useNoteStore } from "./stores/useNoteStore";
import { useCourseStore } from "./stores/useCourseStore";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

export default function Noteslist() {
  const currentNotes = useNoteStore((state) => state.notes);
  const courses = useCourseStore((state) => state.courses);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [courseId, setCourseId] = React.useState("");

  const filteredNotes =
    courseId === ""
      ? currentNotes
      : currentNotes.filter((note) => note.course.id === courseId);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Kaikki muistiinpanot
      </h1>
      <div className="mb-5">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? courses.find((course) => course.name === value)?.name
                : "Valitse kurssi..."}
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
                      key={course.name}
                      value={course.id}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setCourseId(courseId === course.id ? "" : course.id);
                        setOpen(false);
                      }}
                    >
                      {course.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === course.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div>
        {filteredNotes.length === 0 ? (
          <div>Ei tuloksia</div>
        ) : (
          filteredNotes.map((note) => (
            <div className="mb-5" key={note.id}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {note.course.name} (id {note.course.id})
                  </CardTitle>
                  <CardDescription>{note.timestamp}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{note.text}</p>
                </CardContent>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
