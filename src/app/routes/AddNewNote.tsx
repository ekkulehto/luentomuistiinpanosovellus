import NewNoteForm from "@/features/notes/components/NewNoteForm";
import { useParams } from "react-router";
import { DropdownMenu } from "@/features/notes/components/CourseDropdown/CourseDropdown";

export default function AddNewNote() {
  const { courseId } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5 flex flex-row justify-between">
        <DropdownMenu isNotelist={false} />
        {courseId === "undefined" && (
          <p>Valitse kurssi lisätäksesi uuden muistiinpanon</p>
        )}
      </div>
      <div>
        <NewNoteForm />
      </div>
    </div>
  );
}
