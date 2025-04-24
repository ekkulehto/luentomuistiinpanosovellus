import { useParams } from "react-router";
import { DropdownMenu } from "@/features/notes/components/CourseDropdown/CourseDropdown";
import NewNoteForm from "@/features/notes/components/NewNoteForm";

export default function NewNote() {
  const { courseId } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5 flex flex-row justify-between items-center">
        <DropdownMenu isNotelist={false} />
      </div>
      {courseId === "undefined" && (
        <div className="mb-5 flex">
          Valitse kurssi lisätäksesi muistiinpanoja.
        </div>
      )}
      <div>
        <NewNoteForm />
      </div>
    </div>
  );
}
