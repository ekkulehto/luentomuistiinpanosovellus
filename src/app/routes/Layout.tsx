import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";
// import { useFetchData } from "@/hooks/useFetchData";
import { useFetchCourses } from "@/features/courses/api/useFetchCourses";
import { useFetchNotes } from "@/features/notes/api/useFetchNotes";
import Navigation from "../components/Navigation";

export default function AppLayout() {
  // tämä netlifya varten
  // useFetchData();

  useFetchNotes();
  useFetchCourses();

  return (
    <div className="max-w-4xl mx-auto">
      <Navigation />
      <Outlet />
      <Toaster /> {/* Tämä mahdollistaa ilmoituksien lähettämisen */}
    </div>
  );
}
