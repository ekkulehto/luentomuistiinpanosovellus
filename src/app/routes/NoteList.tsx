import { Button } from "@/components/ui/button";
import NoteRow from "@/features/notes/components/NoteRow";
import { Link } from "react-router";
import { useParams } from "react-router";
import NoteListCourseSelector from "@/features/notes/components/NoteListCourseSelector";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { useNoteStore } from "@/features/notes/stores/useNoteStore";

export default function Notelist() {
  const { courseId } = useParams();
  const courses = useCourseStore((state) => state.courses);
  const notes = useNoteStore((state) => state.notes);

  return (
    <div>
      <div className="text-4xl font-bold mb-8 text-center">
        {courseId === undefined ? (
          <h1>Kaikki muistiinpanot</h1>
        ) : (
          <h1>Kurssin muistiinpanot</h1>
        )}
      </div>

      <div className="flex flex-row mb-5 justify-between">
        <NoteListCourseSelector />

        {courses.length === 0 ? (
          <p>Lisää vähintään yksi kurssi lisätäksesi muistiinpanoja</p>
        ) : (
          <Link to={`/notelist/${courseId}/addnewnote${location.search}`}>
            <Button>Lisää uusi muistiinpano</Button>
          </Link>
        )}
      </div>

      <div>
        <NoteRow notes={notes} onlyText={false} />
      </div>
    </div>
  );
}
