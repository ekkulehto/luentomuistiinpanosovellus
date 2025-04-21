import { useNoteStore } from "./stores/useNoteStore";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useParams } from "react-router";

export default function NoteRow() {
  const notes = useNoteStore((state) => state.notes);
  const { courseId } = useParams();

  // jos courseId on undefined niin näytetään kaikki muistiinpanot
  const filteredNotes =
    courseId === undefined
      ? notes
      : notes.filter((note) => note.course.id.toString() === courseId);

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
                <CardDescription>
                  {note.timestamp.toLocaleString()}
                </CardDescription>
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
