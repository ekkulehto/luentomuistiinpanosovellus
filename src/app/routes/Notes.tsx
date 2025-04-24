import { Link } from "react-router";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { useNoteStore } from "@/features/notes/stores/useNoteStore";
import { DropdownMenu } from "@/features/notes/components/CourseDropdown/CourseDropdown";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Plus } from "lucide-react";
import NoteList from "@/features/notes/components/NoteList";

export default function Notes() {
  const { courseId } = useParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const courses = useCourseStore((state) => state.courses);
  const notes = useNoteStore((state) => state.notes);
  const textClass = !isDesktop ? "text-xs" : undefined;

  return (
    <div>
      <div className="text-4xl font-bold mb-8">
        {courseId === undefined ? (
          <h1>Kaikki muistiinpanot</h1>
        ) : (
          <h1>Kurssin muistiinpanot</h1>
        )}
      </div>

      <div className="flex flex-row mb-5 justify-between items-center">
        <DropdownMenu isNotelist={true} />

        {courses.length === 0 ? (
          <p className={textClass}>
            Lisää vähintään yksi kurssi lisätäksesi muistiinpanoja
          </p>
        ) : (
          <Link to={`/notelist/${courseId}/new${location.search}`}>
            {isDesktop ? (
              <Button>Lisää uusi muistiinpano</Button>
            ) : (
              <Button>
                Uusi
                <Plus />
              </Button>
            )}
          </Link>
        )}
      </div>
      <div>
        <NoteList notes={notes} onlyText={false} />
      </div>
    </div>
  );
}
