import { Button } from "@/components/ui/button";
import NoteRow from "./NoteRow";
import { Link } from "react-router";
import { useLocation, useParams } from "react-router";
import NoteListCourseSelector from "./NoteListCourseSelector";
import { useCourseStore } from "./stores/useCourseStore";

export default function Notelist() {
  // jos courseId on undefined, niin ei anneta mahdollisuutta lisätä muistiinpanoa
  const { courseId } = useParams<{ courseId?: string }>();
  const courses = useCourseStore((state) => state.courses);

  // tämän avulla otetaan kurssin nimi mukaan
  const location = useLocation();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Muistiinpanot</h1>
      <div className="flex flex-row mb-5 justify-between">
        <NoteListCourseSelector />

        {courses.length === 0 ? (
          <p>Lisää vähintään yksi kurssi lisätäksesi muistiinpanoja</p>
        ) : (
          <Link to={`/notelist/${courseId}/addnewnote${location.search}`}>
            <Button>Lisää uusi muistiinpano</Button>
          </Link>
        )}
      </div>
      <div>
        <NoteRow />
      </div>
    </div>
  );
}
