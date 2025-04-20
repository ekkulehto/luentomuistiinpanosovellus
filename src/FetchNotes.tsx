import useSWR from "swr"
import axios from "axios"
import Note from "./types/Note"

export default function FetchNotes() {
    const fetcher = (url: string) => axios.get(url).then(res => res.data)

    const {data: notes, error, isLoading} = useSWR<Note[]>("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes", fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    
    return (
        <div>
            {notes?.map((note) =>
                <div key={note.id}>
                    <p>Muistiinpanon id: {note.id}</p>
                    <p>Muistiinpanon teksti: {note.text}</p>
                    <p>Kurssin id: {note.course.id} {note.course.name}</p>
                    <p>Kurssin nimi: {note.course.name}</p>
                    <p>Aikaleima: {note.timestamp}</p>
                    <p>----------------------------------------------</p>
                </div>
            )}
        </div>
    )
}