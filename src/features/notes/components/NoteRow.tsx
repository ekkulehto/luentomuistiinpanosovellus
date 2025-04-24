import { useParams } from "react-router";
import { toast } from "sonner";
import { useNoteStore } from "../stores/useNoteStore";
import TextNoteCard from "./TextNoteCard";
import FullNoteCard from "./FullNoteCard";
import Note from "../types/Note";

type Props = {
  notes: Note[];
  onlyText: boolean;
};

export default function NoteRow({ notes, onlyText }: Props) {
  const { courseId } = useParams();
  const deleteNote = useNoteStore((state) => state.deleteNote);
  const addNote = useNoteStore((state) => state.addNote);

  const handleDeleteAndUndo = (note: Note) => {
    deleteNote(note.id);

    toast.success(`Muistiinpano poistettu`, {
      description:
        note.text.length > 50 ? `${note.text.slice(0, 40)}...` : note.text,
      action: {
        label: "Palauta",
        onClick: () => addNote(note),
      },
    });
  };

  const filterNotes = () => {
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

  const filteredNotes = filterNotes();

  return (
    <>
      {onlyText ? (
        filteredNotes.map((note) => (
          <TextNoteCard key={note.id} text={note.text} />
        ))
      ) : filteredNotes.length === 0 ? (
        <div>Ei muistiinpanoja!</div>
      ) : (
        filteredNotes.map((note) => (
          <FullNoteCard
            key={note.id}
            note={note}
            onDelete={handleDeleteAndUndo}
          />
        ))
      )}
    </>
  );
}
