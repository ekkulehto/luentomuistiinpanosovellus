import { useNoteStore } from "./stores/useNoteStore";
import RenderCourseNotes from "./RenderCourseNotes";

import { useParams } from "react-router";

export default function NoteRow() {
  const notes = useNoteStore((state) => state.notes);
  const { courseId } = useParams();

  // jos courseId on undefined niin näytetään kaikki muistiinpanot
  const filteredNotes =
    courseId === undefined
      ? notes
      : notes.filter((note) => note.course.id.toString() === courseId);

  return (
    <div>
      {filteredNotes.length === 0 ? (
        <div>Ei tuloksia</div>
      ) : (
        RenderCourseNotes(filteredNotes)
      )}
    </div>
  );
}
