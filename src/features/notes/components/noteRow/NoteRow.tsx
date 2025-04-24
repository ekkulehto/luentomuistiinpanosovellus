import Note from "../../types/Note";
import TextNoteCard from "./TextNoteCard";
import FullNoteCard from "./FullNoteCard";

type Props = {
  note: Note;
  onlyText: boolean;
  onDelete: (note: Note) => void;
};

export default function NoteRow({ note, onlyText, onDelete }: Props) {
  return onlyText ? (
    <TextNoteCard text={note.text} />
  ) : (
    <FullNoteCard note={note} onDelete={() => onDelete(note)} />
  );
}
