import Note from "../types/Note";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNoteStore } from "../stores/useNoteStore";
import { toast } from "sonner";

interface RenderCourseNotes {
  notes: Note[];
  onlyText: boolean;
}

export default function RenderCourseNotes({
  notes: filteredNotes,
  onlyText = false,
}: RenderCourseNotes) {
  const deleteNote = useNoteStore((state) => state.deleteNote);
  const addNote = useNoteStore((state) => state.addNote);

  const deleteNoteAndUndo = (note: Note) => {
    deleteNote(note.id);

    toast(`Muistiinpano poistettu`, {
      description:
        note.text.length > 50 ? `${note.text.slice(0, 40)}...` : note.text,
      action: {
        label: "Palauta",
        onClick: () => addNote(note),
      },
    });
  };

  return (
    <>
      {onlyText
        ? filteredNotes.map((note) => (
            <div className="mb-5" key={note.id}>
              <Card>
                <CardContent className="break-words whitespace-pre-wrap">
                  <p>{note.text}</p>
                </CardContent>
              </Card>
            </div>
          ))
        : filteredNotes.map((note) => (
            <div className="mb-5" key={note.id}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <span className="mb-1">
                          {note.course.name} (id:{note.course.id})
                        </span>
                        <CardDescription>
                          {note.timestamp.toLocaleString()}
                        </CardDescription>
                      </div>
                      <Button
                        onClick={() => deleteNoteAndUndo(note)}
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
