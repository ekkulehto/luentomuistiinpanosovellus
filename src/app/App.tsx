import { Routes, Route } from "react-router";
import NewCourseLayout from "./routes/courses/new/Layout";
import CoursesLayout from "./routes/courses/Layout";
import NewNoteLayout from "./routes/notes/new/Layout";
import NotesLayout from "./routes/notes/Layout";
import NewCourse from "./routes/courses/new/NewCourse";
import AppLayout from "./routes/Layout";
import Courses from "./routes/courses/Courses";
import NewNote from "./routes/notes/new/NewNote";
import Notes from "./routes/notes/Notes";
import Home from "./routes/Home";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="notes" element={<NotesLayout />}>
            <Route index element={<Notes />} />
            <Route path=":courseId" element={<Notes />} />
          </Route>

          <Route path="notes/:courseId/new" element={<NewNoteLayout />}>
            <Route index element={<NewNote />} />
          </Route>

          <Route path="courses" element={<CoursesLayout />}>
            <Route index element={<Courses />} />
          </Route>

          <Route path="courses/new" element={<NewCourseLayout />}>
            <Route index element={<NewCourse />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
