import FetchCourses from './FetchCourses'
import FetchNotes from './FetchNotes'
import { useNoteStore } from './stores/useNoteStore'

export default function App() {
  FetchNotes()
  const currentNotes = useNoteStore((state) => state.notes)

  return (
    <div>
      <FetchCourses/>

      <p>---------------------------------------------</p>
      
      {currentNotes.length > 0 && (
        currentNotes?.map((note) =>
        <div key={note.id}>
            <p>Muistiinpanon id: {note.id}</p>
            <p>Muistiinpanon teksti: {note.text}</p>
            <p>Kurssin id: {note.course.id} {note.course.name}</p>
            <p>Kurssin nimi: {note.course.name}</p>
            <p>Aikaleima: {note.timestamp}</p>
            <p>----------------------------------------------</p>
        </div>
      ))}
    </div>
  )
}