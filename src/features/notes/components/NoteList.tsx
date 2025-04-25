import { useParams } from "react-router";
import { toast } from "sonner";
import { useNoteStore } from "../stores/useNoteStore";
import filterNotes from "../utils/filterNotes";
import NoteRow from "./NoteRow/NoteRow";
import Note from "../../../types/Note";
import TextNoteCard from "./NoteRow/TextNoteCard";

type Props = {
  notes: Note[];
  onlyText: boolean;
};

export default function NoteList({ notes, onlyText }: Props) {
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

  const filteredNotes = filterNotes(notes, courseId);

  return (
    <>
      {filteredNotes.length === 0 && !onlyText ? (
        <TextNoteCard text={"Ei muistiinpanoja!"} />
      ) : (
        filteredNotes.map((note) => (
          <NoteRow
            key={note.id}
            note={note}
            onlyText={onlyText}
            onDelete={() => handleDeleteAndUndo(note)}
          />
        ))
      )}
    </>
  );
}
