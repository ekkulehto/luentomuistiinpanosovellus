import { Alert, AlertTitle } from "@/components/ui/alert";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { CourseDropdown } from "@/features/notes/components/CourseDropdown/CourseDropdown";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { NotebookPen } from "lucide-react";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Plus } from "lucide-react";

export default function NoteListHeader() {
  const { courseId } = useParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const courses = useCourseStore((state) => state.courses);

  return (
    <div>
      <div className="text-4xl font-bold mb-25 text-center">
        {courseId === undefined ? (
          <h1>Kaikki muistiinpanot</h1>
        ) : (
          <h1>Kurssin muistiinpanot</h1>
        )}
      </div>

      <div className="flex flex-row mb-5 justify-between items-center">
        <CourseDropdown isNotelist={true} />

        {courses.length !== 0 && (
          <Link to={`/notes/${courseId}/new${location.search}`}>
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
      {courses.length === 0 && (
        <Alert className="mb-5 rounded-none">
          <NotebookPen className="h-4 w-4" />
          <AlertTitle>
            Lisää kursseja kirjoittaaksesi muistiinpanoja.
          </AlertTitle>
        </Alert>
      )}
    </div>
  );
}
