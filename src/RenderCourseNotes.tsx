import Note from "@/types/Note";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNoteStore } from "./stores/useNoteStore";

interface RenderCourseNotes {
  notes: Note[];
  onlyText: boolean;
}

export default function RenderCourseNotes({
  notes,
  onlyText = false,
}: RenderCourseNotes) {
  const deleteNote = useNoteStore((state) => state.deleteNote);

  return (
    <>
      {onlyText
        ? notes.map((note) => (
            <div className="mb-5" key={note.id}>
              <Card>
                <CardContent>
                  <p>{note.text}</p>
                </CardContent>
              </Card>
            </div>
          ))
        : notes.map((note) => (
            <div className="mb-5" key={note.id}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <span className="mb-1">
                          {note.course.name} (id {note.course.id})
                        </span>
                        <CardDescription>
                          {note.timestamp.toLocaleString()}
                        </CardDescription>
                      </div>
                      <Button
                        onClick={() => deleteNote(note.id)}
                        variant="destructive"
                        size="icon"
                      >
                        <X />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{note.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
    </>
  );
}
