import { useCourseStore } from "@/features/courses/stores/useCourseStore";
import { useNoteStore } from "../stores/useNoteStore";
import { useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import Note from "@/types/Note";
import Course from "@/types/Course";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useFetchAllData() {
  const setCourses = useCourseStore((state) => state.setCourses);
  const setNotes = useNoteStore((state) => state.setNotes);
  const endpoint = "/.netlify/functions/data";

  const { data, error, isLoading } = useSWR<{
    courses: Course[];
    notes: Note[];
  }>(endpoint, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (data) {
      setCourses(data.courses);
      setNotes(
        data.notes.map((note) => ({
          ...note,
          timestamp: new Date(note.timestamp),
        }))
      );
    }
  }, [data, setCourses, setNotes]);

  return { isLoading, error };
}
