import NewCourseInput from "@/features/courses/components/NewCourseInput";

export default function AddNewCourse() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Lisää uusi kurssi</h1>
      <div className="flex justify-center">
        <NewCourseInput />
      </div>
    </div>
  );
}
