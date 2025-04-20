import FetchCourses from "./FetchCourses";
import FetchNotes from "./FetchNotes";
import Noteslist from "./NotesList";
// import { useCourseStore } from './stores/useCourseStore'

export default function App() {
  FetchNotes();
  FetchCourses();
  // const currentCourses = useCourseStore((state) => state.courses)

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* {currentCourses.length > 0 && (
        currentCourses?.map((course) =>
        <div key={course.id}>
          <p>{course.id} {course.name}</p>
        </div>
      ))}

      <p>---------------------------------------------</p> */}
      <Noteslist />
    </div>
  );
}
