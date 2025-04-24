import FetchCourses from "@/features/courses/api/FetchCourses";
import FetchNotes from "@/features/notes/api/FetchNotes";
import { Outlet, Routes, Route } from "react-router";
import Notelist from "./routes/NoteList";
import Home from "./routes/Home";
import Header from "./routes/Header";
import AddNewNote from "./routes/AddNewNote";
import CourseList from "./routes/CourseList";
import AddNewCourse from "./routes/AddNewCourse";
import { Toaster } from "../components/ui/sonner";

export default function App() {
  FetchNotes();
  FetchCourses();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="notelist">
            <Route index element={<Notelist />} />
            <Route path=":courseId" element={<Notelist />} />
            <Route path=":courseId/addnewnote" element={<AddNewNote />} />
          </Route>

          <Route path="courselist">
            <Route index element={<CourseList />} />
            <Route path="addnewcourse" element={<AddNewCourse />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="max-w-4xl mx-auto">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  );
}
