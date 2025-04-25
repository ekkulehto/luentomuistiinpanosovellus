import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { useParams } from "react-router";
import { CourseDropdown } from "@/features/notes/components/CourseDropdown/CourseDropdown";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { NotebookPen } from "lucide-react";

export default function NewNoteHeader() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { courseId } = useParams();

  return (
    <div>
      <h1
        className={
          isDesktop
            ? "text-4xl font-bold mb-20 text-center"
            : "text-3xl font-bold mb-15 text-center"
        }
      >
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5 flex flex-row justify-between items-center">
        <CourseDropdown isNoteList={false} />
      </div>
      {courseId === "undefined" && (
        <Alert className="mb-5 rounded-none">
          <NotebookPen className="h-4 w-4" />
          <AlertTitle>
            Valitse kurssi kirjoittaaksesi muistiinpanoja.
          </AlertTitle>
        </Alert>
      )}
    </div>
  );
}
