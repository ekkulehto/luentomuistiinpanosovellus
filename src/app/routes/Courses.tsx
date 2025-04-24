import { Button } from "@/components/ui/button";
import Courselist from "@/features/courses/components/CourseList";
import { Link } from "react-router";

export default function Courses() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Kurssit</h1>

      <div className="flex flex-row mb-5 justify-between">
        <div>Kaikki kurssit</div>

        <Link to={"/courselist/new"}>
          <Button>Lisää uusi kurssi</Button>
        </Link>
      </div>
      <Courselist />
    </div>
  );
}
