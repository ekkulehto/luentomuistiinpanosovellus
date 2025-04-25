import Note from "@/types/Note";
import SessionCard from "./SessionCard";
import NoteCard from "./NoteCard";

type Props = {
  note: Note;
  onlyText: boolean;
  onDelete: (note: Note) => void;
};

export default function NoteRow({ note, onlyText, onDelete }: Props) {
  return onlyText ? (
    <SessionCard text={note.text} />
  ) : (
    <NoteCard note={note} onDelete={() => onDelete(note)} />
  );
}
