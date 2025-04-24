import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Plus } from "lucide-react";
import Courselist from "@/features/courses/components/CourseList";

export default function Courses() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Kurssit</h1>

      <div className="flex flex-row mb-5 justify-between items-center">
        <div>Kaikki kurssit</div>

        <Link to={"/courselist/new"}>
          {isDesktop ? (
            <Button>Lisää uusi kurssi</Button>
          ) : (
            <Button>
              Uusi
              <Plus />
            </Button>
          )}
        </Link>
      </div>
      <Courselist />
    </div>
  );
}
