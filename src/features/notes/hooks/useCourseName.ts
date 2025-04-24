import { useEffect, useState } from "react";
import Course from "@/features/courses/types/Course";

export default function useCourseName(
  courses: Course[],
  searchParams: URLSearchParams,
  courseId?: string
) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (courseId) {
      const id = Number(courseId);
      const name = searchParams.get("name");
      if (name) {
        setValue(decodeURIComponent(name));
      } else {
        const course = courses.find((course) => course.id === id);
        if (course) {
          setValue(course.name);
        }
      }
    }
  }, [courseId, courses, searchParams]);

  return value;
}
