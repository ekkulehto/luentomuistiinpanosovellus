import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "./stores/useCourseStore";

export default function CourseRow() {
  const courses = useCourseStore((state) => state.courses);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);

  return courses.length === 0 ? (
    <div>Ei kursseja!</div>
  ) : (
    courses.map((course) => (
      <div className="mb-5" key={course.id}>
        <Card className="">
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                  <span className="mb-1">
                    {course.name} (id {course.id})
                  </span>
                </div>
                <Button
                  onClick={() => deleteCourse(course.id)}
                  variant="destructive"
                  size="icon"
                >
                  <X />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    ))
  );
}
