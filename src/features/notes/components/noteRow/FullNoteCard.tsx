import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Note from "../../types/Note";

type Props = {
  note: Note;
  onDelete: (note: Note) => void;
};

export default function FullNoteCard({ note, onDelete }: Props) {
  return (
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
                onClick={() => onDelete(note)}
                variant="destructive"
                size="icon"
              >
                <X />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="break-words whitespace-pre-wrap">
          <p>{note.text}</p>
        </CardContent>
      </Card>
    </div>
  );
}
