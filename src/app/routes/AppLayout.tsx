import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import useFetchCourses from "@/features/courses/api/useFetchCourses";
import useFetchNotes from "@/features/notes/api/useFetchNotes";
import Header from "./Header";

export function AppLayout() {
  useFetchCourses();
  useFetchNotes();

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  );
}
