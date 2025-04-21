import Note from "@/types/Note";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function RenderCourseNotes(notes: Note[]) {
  return notes.map((note) => (
    <div className="mb-5" key={note.id}>
      <Card>
        <CardHeader>
          <CardTitle>
            {note.course.name} (id {note.course.id})
          </CardTitle>
          <CardDescription>{note.timestamp.toLocaleString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{note.text}</p>
        </CardContent>
      </Card>
    </div>
  ));
}
