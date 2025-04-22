import { Button } from "@/components/ui/button";
import CourseSelector from "./CourseSelector";
import NoteRow from "./Noterow";
import { Link } from "react-router";
import { useLocation, useParams } from "react-router";

export default function Notelist() {
  // jos courseId on undefined, niin ei anneta mahdollisuutta lisätä muistiinpanoa
  const { courseId } = useParams<{ courseId?: string }>();

  // tämän avulla otetaan kurssin nimi mukaan
  const location = useLocation();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Muistiinpanot</h1>
      <div className="flex flex-row mb-5 justify-between">
        <CourseSelector />

        {!courseId ? (
          <p>Valitse kurssi lisätäksesi uusi muistiinpano</p>
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
