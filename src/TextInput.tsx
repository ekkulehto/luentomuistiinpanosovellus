import { Textarea } from "@/components/ui/textarea";
import { Button } from "./components/ui/button";
import { ChangeEvent, useState } from "react";
import { useNoteStore } from "./stores/useNoteStore";
import { useSelectedCourseStore } from "./stores/useSelectedCourseStore";

export default function TextInput() {
  const [text, setText] = useState("");
  const addNote = useNoteStore((state) => state.addNote);
  const notes = useNoteStore((state) => state.notes);
  const courseId = useSelectedCourseStore((state) => state.courseId);
  const courseName = useSelectedCourseStore((state) => state.courseName);

  const handleClick = () => {
    addNote({
      id: notes.length + 1,
      text: text,
      course: { id: courseId, name: courseName },
      timestamp: new Date(),
    });
    console.log({
      id: notes.length,
      text: text,
      course: { id: courseId, name: courseName },
      timestamp: new Date(),
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="mb-5">
        <Textarea
          value={text}
          onChange={(e) => handleChange(e)}
          className="h-40"
          placeholder="Kirjoita muistiinpanosi tähän."
        />
      </div>
      <div className="flex flex-row space-x-5">
        <Button onClick={handleClick}>Lisää muistiinpano</Button>
        <Button variant="destructive">Peruuta</Button>
      </div>
    </div>
  );
}
