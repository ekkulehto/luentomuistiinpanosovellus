import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import CourseRow from "@/features/courses/components/CourseRow";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";

export default function CourseList() {
  const courses = useCourseStore((state) => state.courses);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Kurssit</h1>
      <div className="flex flex-row mb-5 justify-between">
        <div>Kaikki kurssit</div>

        <Link to={"/courselist/addnewcourse"}>
          <Button>Lisää uusi kurssi</Button>
        </Link>
      </div>
      <div>
        {courses.length === 0 ? (
          <div>Ei kursseja!</div>
        ) : (
          courses.map((course) => <CourseRow key={course.id} course={course} />)
        )}
      </div>
    </div>
  );
}
