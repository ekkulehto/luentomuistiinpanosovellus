import Note from "../types/Note";

export default function filterNotes(notes: Note[], courseId?: string) {
    let filteredNotes: Note[];

    if (courseId === undefined) {
      filteredNotes = notes;
    } else {
      filteredNotes = notes.filter(
        (note) => note.course.id.toString() === courseId
      );
    }

    return filteredNotes.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  };