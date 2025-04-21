import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import CourseRow from "./CourseRow";

export default function CourseList() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Kurssit</h1>
      <div className="flex flex-row mb-5 justify-between">
        <div>Kaikki kurssit</div>

        <Button>
          <Link to={"/courselist/addnewcourse"}>Lisää uusi kurssi</Link>
        </Button>
      </div>
      <div>
        <CourseRow />
      </div>
    </div>
  );
}
