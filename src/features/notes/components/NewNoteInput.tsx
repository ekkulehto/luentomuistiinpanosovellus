import { ChangeEvent, useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDropdownMenuStore } from "../stores/useDropdownMenuStore";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { GetNextFreeId } from "@/utils/getNextFreeId";
import { useNoteStore } from "../stores/useNoteStore";
import NoteList from "./NoteList";
import Note from "../types/Note";

export default function NewNoteInput() {
  const [sessionNotes, setSessionNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams<{ courseId: string }>();
  const courses = useCourseStore((state) => state.courses);
  const courseName = searchParams.get("name") ?? "";
  const notes = useNoteStore((state) => state.notes);
  const addNote = useNoteStore((state) => state.addNote);
  const navigate = useNavigate();
  const setDropdownMenuLocked = useDropdownMenuStore(
    (state) => state.setIsLocked
  );

  const checkIfValidCourse = () => {
    const id = !courseId ? false : Number(courseId);

    return courses.some(
      (course) => course.id === id && course.name === courseName
    );
  };

  // deaktivoidaan tekstikenttä ja tallenna painike
  const disableNewNote = !checkIfValidCourse();

  const navigateToNotelistOrCourseNotes = !checkIfValidCourse()
    ? "/notelist"
    : `/notelist/${courseId}?name=${encodeURIComponent(courseName)}`;

  // komponentin latautuessa asetetaan dropdownmenu näkyviin
  useEffect(() => {
    setDropdownMenuLocked(false);
  }, [setDropdownMenuLocked]);

  const handleClick = () => {
    const id = GetNextFreeId(notes);

    if (text.length) {
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
          onClick={() => navigate(navigateToNotelistOrCourseNotes)}
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
      <NoteList notes={sessionNotes} onlyText={true} />
    </div>
  );
}
