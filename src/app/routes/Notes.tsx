import { Link } from "react-router";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { useNoteStore } from "@/features/notes/stores/useNoteStore";
import NoteList from "@/features/notes/components/NoteList";
import { DropdownMenu } from "@/features/notes/components/CourseDropdown/CourseDropdown";

export default function Notes() {
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
        <DropdownMenu isNotelist={true} />

        {courses.length === 0 ? (
          <p>Lisää vähintään yksi kurssi lisätäksesi muistiinpanoja</p>
        ) : (
          <Link to={`/notelist/${courseId}/addnewnote${location.search}`}>
            <Button>Lisää uusi muistiinpano</Button>
          </Link>
        )}
      </div>

      <div>
        <NoteList notes={notes} onlyText={false} />
      </div>
    </div>
  );
}
