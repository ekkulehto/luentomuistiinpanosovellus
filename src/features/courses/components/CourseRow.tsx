import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "../stores/useCourseStore";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNoteStore } from "@/features/notes/stores/useNoteStore";

export default function CourseRow() {
  const notes = useNoteStore((state) => state.notes);
  const courses = useCourseStore((state) => state.courses);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);
  const deleteNote = useNoteStore((state) => state.deleteNote);

  function deleteCourseAndNotes(courseId: number) {
    deleteCourse(courseId);
    notes
      .filter((note) => note.course.id === courseId)
      .forEach((note) => deleteNote(note.id));
  }

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
                <AlertDialog>
                  {/* as child estää sisäkkäiset buttonit */}
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon">
                      <X />
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Oletko aivan varma?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tätä toimenpidettä ei voi perua. Tämä poistaa valitun
                        kurssin sekä KAIKKI siihen lisätyt muistiinpanot
                        lopullisesti.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Peruuta</AlertDialogCancel>
                      {/* as child estää sisäkkäiset buttonit täälläkin */}
                      <AlertDialogAction
                        asChild
                        onClick={() => deleteCourseAndNotes(course.id)}
                      >
                        <Button className="text-white" variant="destructive">
                          Jatka
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    ))
  );
}
