import * as React from "react";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { useEffect } from "react";
import Course from "@/types/Course";

export default function useCourseDropdown(isNoteList: boolean) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams();
  const courses = useCourseStore((state) => state.courses);
  const navigate = useNavigate();

  const toggleCourse = (course: Course, courseId?: string) => {
    const id = course.id.toString();
    const name = course.name;

    if (isNoteList && id === courseId) {
      navigate("/notes");
    } else if (isNoteList) {
      navigate(`/notes/${id}?name=${encodeURIComponent(name)}`);
    } else {
      navigate(`/notes/${id}/new?name=${encodeURIComponent(name)}`);
    }
  };

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

  return { open, courses, courseId, value, toggleCourse, setOpen, setValue };
}
