import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useCourseStore } from "../stores/useCourseStore";
import { useNoteStore } from "@/features/notes/stores/useNoteStore";
import Course from "../../../types/Course";
import DeleteCourseDialog from "./DeleteCourseDialog";

type Props = {
  course: Course;
};

export default function CourseRow({ course }: Props) {
  const notes = useNoteStore((state) => state.notes);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);
  const deleteNote = useNoteStore((state) => state.deleteNote);

  const handleDelete = (courseToDelete: Course) => {
    deleteCourse(courseToDelete.id);
    notes
      .filter((noteToDelete) => noteToDelete.course.id === courseToDelete.id)
      .forEach((noteToDelete) => deleteNote(noteToDelete.id));
  };

  return (
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
              <DeleteCourseDialog onConfirm={() => handleDelete(course)} />
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
