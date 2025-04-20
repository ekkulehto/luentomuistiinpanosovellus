import { useNoteStore } from "./stores/useNoteStore";
import { useSelectedCourseStore } from "./stores/useSelectedCourseStore";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NoteRow() {
  const currentNotes = useNoteStore((state) => state.notes);
  const courseId = useSelectedCourseStore((state) => state.courseId);

  const filteredNotes =
    courseId === ""
      ? currentNotes
      : currentNotes.filter((note) => note.course.id === courseId);

  return (
    <div>
      {filteredNotes.length === 0 ? (
        <div>Ei tuloksia</div>
      ) : (
        filteredNotes.map((note) => (
          <div className="mb-5" key={note.id}>
            <Card>
              <CardHeader>
                <CardTitle>
                  {note.course.name} (id {note.course.id})
                </CardTitle>
                <CardDescription>{note.timestamp}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{note.text}</p>
              </CardContent>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}
