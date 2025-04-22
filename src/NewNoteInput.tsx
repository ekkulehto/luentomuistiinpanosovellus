import { useParams, useSearchParams, useNavigate } from "react-router";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./components/ui/button";
import { ChangeEvent, useEffect, useState } from "react";

import RenderCourseNotes from "./RenderCourseNotes";
import { useNoteStore } from "./stores/useNoteStore";
import Note from "./types/Note";
import { useDropdownMenuStore } from "./stores/useDropdownMenuStore";
import { toast } from "sonner";
import { GetNextFreeNoteId } from "./lib/getNextFreeNoteId";

export default function NewNoteInput() {
  const [sessionNotes, setSessionNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams<{ courseId: string }>();
  const courseName = searchParams.get("name") ?? "";
  const notes = useNoteStore((state) => state.notes);
  const addNote = useNoteStore((state) => state.addNote);
  const navigate = useNavigate();
  const setDropdownMenuLocked = useDropdownMenuStore(
    (state) => state.setIsLocked
  );

  const disableNewNote = courseId === "undefined" ? true : false;

  const notelistOrCourseNotes =
    courseId === "undefined"
      ? "/notelist"
      : `/notelist/${courseId}?name=${encodeURIComponent(courseName)}`;

  // komponentin latautuessa asetetaan dropdownmenu näkyviin
  useEffect(() => {
    setDropdownMenuLocked(false);
  }, [setDropdownMenuLocked]);

  const handleClick = () => {
    const id = GetNextFreeNoteId(notes);

    if (text.length > 0) {
      const newNote: Note = {
        id: id,
        text: text,
        course: { id: Number(courseId), name: courseName },
        timestamp: new Date(),
      };

      addNote(newNote);
      setSessionNotes((state) => [...state, newNote]);
      setDropdownMenuLocked(true);
      setText("");
    } else {
      toast(`Virhe!`, {
        description: "Et voi tallentaa tyhjää muistiinpanoa.",
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="mb-5">
        <Textarea
          value={text}
          onChange={(e) => handleChange(e)}
          className="h-40"
          placeholder="Kirjoita muistiinpanosi tähän."
          disabled={disableNewNote}
        />
      </div>
      <div className="flex flex-row space-x-5 mb-10">
        <Button onClick={handleClick} disabled={disableNewNote}>
          Tallenna
        </Button>
        <Button
          onClick={() => navigate(notelistOrCourseNotes)}
          variant="destructive"
        >
          Takaisin
        </Button>
      </div>
      {sessionNotes.length > 0 && (
        <div className="mb-5 mt-20">
          <h2 className="text-2xl text-center">Session muistiinpanot</h2>
        </div>
      )}
      <RenderCourseNotes notes={sessionNotes} onlyText={true} />
    </div>
  );
}
