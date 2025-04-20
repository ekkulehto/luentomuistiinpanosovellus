import CourseSelector from "./CourseSelector";
import NoteRow from "./Noterow";

export default function Notelist() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Muistiinpanot</h1>
      <div className="mb-5">
        <CourseSelector />
      </div>
      <div>
        <NoteRow />
      </div>
    </div>
  );
}
