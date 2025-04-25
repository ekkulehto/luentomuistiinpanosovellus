import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useNewNoteForm from "../hooks/useNewNoteForm";
import NoteList from "./NoteList";

export default function NewNoteForm() {
  const {
    text,
    sessionNotes,
    disableNewNote,
    navigateToUrl,
    navigate,
    handleClick,
    handleChange,
  } = useNewNoteForm();

  return (
    <div>
      <div className="mb-5">
        <Textarea
          value={text}
          onChange={(e) => handleChange(e)}
          className="h-40"
          placeholder="Kirjoita muistiinpanosi tähän."
          disabled={disableNewNote}
        />
      </div>
      <div className="flex flex-row space-x-5 mb-10">
        <Button onClick={handleClick} disabled={disableNewNote}>
          Tallenna
        </Button>
        <Button onClick={() => navigate(navigateToUrl)} variant="destructive">
          Takaisin
        </Button>
      </div>
      {sessionNotes.length > 0 && (
        <div className="mb-5 mt-20">
          <h2 className="text-2xl text-center">Session muistiinpanot</h2>
        </div>
      )}
      <NoteList
        notes={sessionNotes.sort((a, b) => a.id - b.id)}
        onlyText={true}
      />
    </div>
  );
}
