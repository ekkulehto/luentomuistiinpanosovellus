import * as React from "react";
import { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import Course from "@/types/Course";

type Props = {
  isNotelist: boolean;
};

export default function useCourseDropdown({ isNotelist }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchParams] = useSearchParams();
  const { courseId } = useParams();
  const courses = useCourseStore((state) => state.courses);
  const navigate = useNavigate();

  const toggleCourse = (course: Course, courseId?: string) => {
    const id = course.id.toString();
    const name = course.name;

    if (isNotelist && id === courseId) {
      navigate("/notelist");
    } else if (isNotelist) {
      navigate(`/notelist/${id}?name=${encodeURIComponent(name)}`);
    } else {
      navigate(`/notelist/${id}/new?name=${encodeURIComponent(name)}`);
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
