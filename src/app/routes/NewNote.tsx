import { useParams } from "react-router";
import { DropdownMenu } from "@/features/notes/components/CourseDropdown/CourseDropdown";
import { Alert, AlertTitle } from "@/components/ui/alert";
import NewNoteForm from "@/features/notes/components/NewNoteForm";
import { NotebookPen } from "lucide-react";

export default function NewNote() {
  const { courseId } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-25 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5 flex flex-row justify-between items-center">
        <DropdownMenu isNotelist={false} />
      </div>
      {courseId === "undefined" && (
        <Alert className="mb-5 rounded-none">
          <NotebookPen className="h-4 w-4" />
          <AlertTitle>Valitse kurssi lisätäksesi muistiinpanoja.</AlertTitle>
        </Alert>
      )}
      <div>
        <NewNoteForm />
      </div>
    </div>
  );
}
