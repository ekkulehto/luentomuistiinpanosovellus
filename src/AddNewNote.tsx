import CourseSelector from "./CourseSelector";
import { useSelectedCourseStore } from "./stores/useSelectedCourseStore";
import TextInput from "./TextInput";

export default function AddNewNote() {
  const courseId = useSelectedCourseStore((state) => state.courseId);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="flex flex-col space-y-10">
        <CourseSelector />

        {courseId === -1 ? (
          <div>Valitse kurssi jolle haluat lisätä uuden muistiinpanon.</div>
        ) : (
          <TextInput />
        )}
      </div>
      <div></div>
    </div>
  );
}
