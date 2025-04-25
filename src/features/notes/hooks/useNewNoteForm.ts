import { useParams, useSearchParams, useNavigate } from "react-router";
import { ChangeEvent, useEffect, useState } from "react";
import { useCourseDropdownStore } from "../stores/useCourseDropdownStore";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { GetNextFreeId } from "@/utils/getNextFreeId";
import { useNoteStore } from "../stores/useNoteStore";
import { toast } from "sonner";
import Note from "@/types/Note";

export default function useNewNoteForm() {
  const [sessionNotes, setSessionNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams<{ courseId: string }>();
  const courses = useCourseStore((state) => state.courses);
  const courseName = searchParams.get("name") ?? "";
  const notes = useNoteStore((state) => state.notes);
  const addNote = useNoteStore((state) => state.addNote);
  const navigate = useNavigate();
  const setDropdownMenuLocked = useCourseDropdownStore(
    (state) => state.setIsLocked
  );

  const isValidCourse = () => {
    const id = !courseId ? false : Number(courseId);

    return courses.some(
      (course) => course.id === id && course.name === courseName
    );
  };

  // deaktivoidaan tekstikenttä ja tallenna painike
  const disableNewNote = !isValidCourse();

  const navigateToUrl = !isValidCourse()
    ? "/notes"
    : `/notes/${courseId}?name=${encodeURIComponent(courseName)}`;

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
      toast.error(`Virhe!`, {
        description: "Et voi tallentaa tyhjää muistiinpanoa.",
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return {
    text,
    sessionNotes,
    disableNewNote,
    navigateToUrl,
    navigate,
    handleClick,
    handleChange,
  };
}
