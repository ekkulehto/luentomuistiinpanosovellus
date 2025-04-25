import { Routes, Route } from "react-router";
import AppLayout from "./routes/Layout";
import NotesLayout from "./routes/notes/Layout";
import NewCourse from "./routes/courses/newcourse/NewCourse";
import Courses from "./routes/courses/Courses";
import NewNote from "./routes/notes/newnote/NewNote";
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
            <Route path=":courseId/new" element={<NewNote />} />
          </Route>

          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path="new" element={<NewCourse />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
