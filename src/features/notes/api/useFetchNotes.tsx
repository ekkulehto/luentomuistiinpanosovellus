import useSWR from "swr";
import axios from "axios";
import Note from "../types/Note";
import { useNoteStore } from "../stores/useNoteStore";
import { useEffect } from "react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function useFetchNotes() {
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
