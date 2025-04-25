import { useNoteStore } from "@/features/notes/stores/useNoteStore";
import NoteListHeader from "@/features/notes/components/Header/NoteListHeader";
import NoteList from "@/features/notes/components/NoteList";

export default function Notes() {
  const notes = useNoteStore((state) => state.notes);
  return (
    <div>
      <NoteListHeader />
      <NoteList notes={notes} onlyText={false} />
    </div>
  );
}
