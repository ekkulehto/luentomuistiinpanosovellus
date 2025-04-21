import FetchCourses from "./FetchCourses";
import FetchNotes from "./FetchNotes";
import { Outlet, Routes, Route } from "react-router";
import Notelist from "./NoteList";
import Home from "./Home";
import Header from "./Header";
import AddNewNote from "./AddNewNote";

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

          <Route path="courses">
            {/* <Route index element={<CourseList />} />
            <Route path=":courseId" element={<CourseList />} />
            <Route path=":courseId/addnewnote" element={<AddNewCourse />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
