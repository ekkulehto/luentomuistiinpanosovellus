import { Outlet } from "react-router";
import NoteListHeader from "@/features/notes/components/Header/NoteListHeader";

export default function NotesLayout() {
  return (
    <div>
      <NoteListHeader />
      <Outlet />
    </div>
  );
}
