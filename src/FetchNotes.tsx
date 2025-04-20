import useSWR from "swr"
import axios from "axios"
import Note from "./types/Note"
import { useNoteStore } from "./stores/useNoteStore"
import { useEffect} from "react";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function FetchNotes() {
    const setNotes = useNoteStore((state) => state.setNotes)

    const {data: notes, error, isLoading} = useSWR<Note[]>(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes", 
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
    )

    useEffect(() => {
        if (notes) {
            setNotes(notes)
        }
    }, [notes, setNotes]);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
}