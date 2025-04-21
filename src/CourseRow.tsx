import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { useCourseStore } from "./stores/useCourseStore";

export default function CourseRow() {
  const courses = useCourseStore((state) => state.courses);
  return courses.map((course) => (
    <div className="mb-5" key={course.id}>
      <Card className="">
        <CardHeader>
          <CardTitle>
            {course.name} (id {course.id})
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  ));
}
