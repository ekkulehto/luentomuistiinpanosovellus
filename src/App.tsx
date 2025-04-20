import FetchCourses from './FetchCourses'
import FetchNotes from './FetchNotes'
import { useCourseStore } from './stores/useCourseStore'
import { useNoteStore } from './stores/useNoteStore'

export default function App() {
  FetchNotes()
  FetchCourses()
  const currentNotes = useNoteStore((state) => state.notes)
  const currentCourses = useCourseStore((state) => state.courses)

  return (
    <div>
      {currentCourses.length > 0 && (
        currentCourses?.map((course) =>
        <div key={course.id}>
          <p>{course.id} {course.name}</p>
        </div>
      ))}

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