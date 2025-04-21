import CourseSelector from "./CourseSelector";
import TextInput from "./TextInput";
import { useParams } from "react-router";

export default function AddNewNote() {
  const courseId = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5">
        <CourseSelector />
      </div>
      <div>
        {courseId === undefined ? (
          <div>Valitse kurssi jolle haluat lisätä uuden muistiinpanon.</div>
        ) : (
          <TextInput />
        )}
      </div>
      <div></div>
    </div>
  );
}
