import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import CourseRow from "@/features/courses/components/CourseRow";
import useFetchCourses from "@/features/courses/api/useFetchCourses";

export default function CourseList() {
  const { isLoading, error } = useFetchCourses();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Kurssit</h1>
      <div className="flex flex-row mb-5 justify-between">
        <div>Kaikki kurssit</div>

        <Link to={"/courselist/addnewcourse"}>
          <Button>Lisää uusi kurssi</Button>
        </Link>
      </div>
      <div>
        <CourseRow />
      </div>
    </div>
  );
}
