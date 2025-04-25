import { useNoteStore } from "@/features/notes/stores/useNoteStore";
import NoteList from "@/features/notes/components/NoteList";

export default function Notes() {
  const notes = useNoteStore((state) => state.notes);
  return (
    <div>
      <NoteList notes={notes} onlyText={false} />
    </div>
  );
}
