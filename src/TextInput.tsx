import { Textarea } from "@/components/ui/textarea";
import { Button } from "./components/ui/button";
import { ChangeEvent, useState } from "react";
import { useNoteStore } from "./stores/useNoteStore";
import Note from "./types/Note";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSessionNoteStore } from "./stores/useSessionNoteStore";

import { useParams, useSearchParams } from "react-router";

export default function TextInput() {
  const [text, setText] = useState("");
  const [searchParams] = useSearchParams();
  const addNote = useNoteStore((state) => state.addNote);
  const notes = useNoteStore((state) => state.notes);
  const courseId = useParams();
  const courseName = searchParams.get("name") ?? "";
  const sessionNotes = useSessionNoteStore((state) => state.sessionNotes);
  const addSessionNote = useSessionNoteStore((state) => state.addSessionNote);

  const handleClick = () => {
    const addedNote: Note = {
      id: notes.length + 1,
      text: text,
      course: { id: Number(courseId), name: courseName },
      timestamp: new Date(),
    };

    addNote(addedNote);
    addSessionNote(addedNote);
    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="mb-5">
        <Textarea
          value={text}
          onChange={(e) => handleChange(e)}
          className="h-40"
          placeholder="Kirjoita muistiinpanosi tähän."
        />
      </div>
      <div className="flex flex-row space-x-5 mb-10">
        <Button onClick={handleClick}>Lisää muistiinpano</Button>
        <Button variant="destructive">Peruuta</Button>
      </div>
      <div>
        {sessionNotes.map((note) => (
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
        ))}
      </div>
    </div>
  );
}
