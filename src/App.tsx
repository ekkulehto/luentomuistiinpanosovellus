import AddNewNote from "./AddNewNote";
import FetchCourses from "./FetchCourses";
import FetchNotes from "./FetchNotes";
// import Noteslist from "./NoteList";

export default function App() {
  FetchNotes();
  FetchCourses();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <AddNewNote />
      {/* <Noteslist /> */}
    </div>
  );
}
