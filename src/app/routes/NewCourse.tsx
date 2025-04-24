import NewCourseForm from "@/features/courses/components/NewCourseForm";

export default function NewCourse() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-25 text-center">
        Lisää uusi kurssi
      </h1>
      <div className="flex justify-center">
        <NewCourseForm />
      </div>
    </div>
  );
}
