import CourseSelector from "./CourseSelector";

export default function AddNewNote() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5">
        <CourseSelector />
      </div>
    </div>
  );
}
