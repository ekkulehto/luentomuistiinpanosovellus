import { Button } from "@/components/ui/button";

import CourseSelector from "./CourseSelector";
import NoteRow from "./Noterow";

export default function Notelist() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Muistiinpanot</h1>
      <div className="flex flex-row mb-5 justify-between">
        <CourseSelector />
        <Button>Lisää uusi muistiinpano</Button>
      </div>
      <div>
        <NoteRow />
      </div>
    </div>
  );
}
