import { Routes, Route } from "react-router";
import Notes from "./routes/Notes";
import Home from "./routes/Home";
import NewNote from "./routes/NewNote";
import Courses from "./routes/Courses";
import NewCourse from "./routes/NewCourse";
import { AppLayout } from "./routes/AppLayout";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="notelist">
            <Route index element={<Notes />} />
            <Route path=":courseId" element={<Notes />} />
            <Route path=":courseId/new" element={<NewNote />} />
          </Route>

          <Route path="courselist">
            <Route index element={<Courses />} />
            <Route path="new" element={<NewCourse />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
