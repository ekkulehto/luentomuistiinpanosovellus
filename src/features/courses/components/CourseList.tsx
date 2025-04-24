import { useCourseStore } from "../stores/useCourseStore";
import CourseRow from "./CourseRow";

export default function Courselist() {
  const courses = useCourseStore((state) => state.courses);
  courses.sort((a, b) => a.id - b.id);

  return (
    <div>
      {courses.length === 0 ? (
        <div>Ei kursseja!</div>
      ) : (
        courses.map((course) => <CourseRow key={course.id} course={course} />)
      )}
    </div>
  );
}
