import { useParams, useSearchParams, useNavigate } from "react-router";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./components/ui/button";
import { ChangeEvent, useState } from "react";

import RenderCourseNotes from "./RenderCourseNotes";
import { useNoteStore } from "./stores/useNoteStore";
import Note from "./types/Note";

export default function TextInput() {
  const [text, setText] = useState("");
  const [searchParams] = useSearchParams();
  const addNote = useNoteStore((state) => state.addNote);
  const notes = useNoteStore((state) => state.notes);
  const { courseId } = useParams<{ courseId: string }>();
  const courseName = searchParams.get("name") ?? "";
  const navigate = useNavigate();
  const [sessionNotes, setSessionNotes] = useState<Note[]>([]);

  const handleClick = () => {
    const addedNote: Note = {
      id: notes.length + 1,
      text: text,
      course: { id: Number(courseId), name: courseName },
      timestamp: new Date(),
    };

    addNote(addedNote);
    setSessionNotes((state) => [...state, addedNote]);
    setText("");
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
      <div className="flex flex-row space-x-5 mb-10">
        <Button onClick={handleClick}>Lisää muistiinpano</Button>
        <Button onClick={() => navigate(-1)} variant="destructive">
          Peruuta
        </Button>
      </div>
      <div>{RenderCourseNotes(sessionNotes)}</div>
    </div>
  );
}
