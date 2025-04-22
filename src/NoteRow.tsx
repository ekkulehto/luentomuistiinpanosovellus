import { useNoteStore } from "./stores/useNoteStore";
import { useParams } from "react-router";
import RenderCourseNotes from "./RenderCourseNotes";

export default function NoteRow() {
  const { courseId } = useParams();
  const notes = useNoteStore((state) => state.notes);

  // jos courseId on undefined niin näytetään kaikki muistiinpanot muuten filtteröidään
  const filteredNotes =
    courseId === undefined
      ? notes
      : notes.filter((note) => note.course.id.toString() === courseId);

  return (
    <div>
      {filteredNotes.length === 0 ? (
        <div>Ei muistiinpanoja!</div>
      ) : (
        <RenderCourseNotes notes={filteredNotes} onlyText={false} />
      )}
    </div>
  );
}
