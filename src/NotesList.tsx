import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useNoteStore } from "./stores/useNoteStore";

export default function Noteslist() {
  const currentNotes = useNoteStore((state) => state.notes);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Kaikki muistiinpanot
      </h1>
      <div>
        {currentNotes.length > 0 &&
          currentNotes?.map((note) => (
            <div className="mb-5" key={note.id}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {note.course.name} (id {note.id})
                  </CardTitle>
                  <CardDescription>{note.timestamp}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{note.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
