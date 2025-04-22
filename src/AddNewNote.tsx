import NewNoteInput from "./NewNoteInput";
import AddNoteCourseSelector from "./AddNoteCourseSelector";
import { useParams } from "react-router";

export default function AddNewNote() {
  const { courseId } = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5 flex flex-row justify-between">
        <AddNoteCourseSelector />
        {courseId === "undefined" && (
          <p>Valitse kurssi lisätäksesi uuden muistiinpanon</p>
        )}
      </div>
      <div>
        <NewNoteInput />
      </div>
    </div>
  );
}
