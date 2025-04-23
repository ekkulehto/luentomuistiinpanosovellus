import { useNoteStore } from "./stores/useNoteStore";
import { useParams } from "react-router";
import RenderCourseNotes from "./RenderCourseNotes";
import Note from "./types/Note";

export default function NoteRow() {
  const { courseId } = useParams();
  const notes = useNoteStore((state) => state.notes);

  // jos courseId on undefined niin näytetään kaikki muistiinpanot muuten filtteröidään
  const filterNotes = () => {
    let filteredNotes: Note[];

    if (courseId === undefined) {
      filteredNotes = notes;
    } else {
      filteredNotes = notes.filter(
        (note) => note.course.id.toString() === courseId
      );
    }
    // järjestetään ajallisesti uusimmasta vanhimpaan
    return filteredNotes.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  };

  const filteredNotes = filterNotes();

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
