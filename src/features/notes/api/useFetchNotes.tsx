import { useNoteStore } from "../stores/useNoteStore";
import { useEffect } from "react";
import useSWR from "swr";
import Note from "../../../types/Note";
import axios from "axios";

export function useFetchNotes() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const setNotes = useNoteStore((state) => state.setNotes);

  const {
    data: notes,
    error,
    isLoading,
  } = useSWR<Note[]>(
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    if (notes) {
      const notesWithDate: Note[] = notes.map((note) => ({
        ...note,
        timestamp: new Date(note.timestamp),
      }));
      setNotes(notesWithDate);
    }
  }, [notes, setNotes]);

  return { error, isLoading };
}
