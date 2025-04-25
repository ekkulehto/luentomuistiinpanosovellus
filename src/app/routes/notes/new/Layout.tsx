import { Outlet } from "react-router";
import NewNoteHeader from "@/features/notes/components/Header/NewNoteHeader";

export default function NewNoteLayout() {
  return (
    <div>
      <NewNoteHeader />
      <Outlet />
    </div>
  );
}
