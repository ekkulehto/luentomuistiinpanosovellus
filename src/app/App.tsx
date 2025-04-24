import { Routes, Route } from "react-router";
import Notes from "./routes/Notes";
import Home from "./routes/Home";
import AddNewNote from "./routes/AddNewNote";
import CourseList from "./routes/CourseList";
import AddNewCourse from "./routes/AddNewCourse";
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
