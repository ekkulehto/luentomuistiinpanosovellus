import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Plus } from "lucide-react";
import Courselist from "@/features/courses/components/CourseList";

export default function Courses() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      <h1
        className={
          isDesktop
            ? "text-4xl font-bold mb-20 text-center"
            : "text-4xl font-bold mb-10 text-center"
        }
      >
        Kurssit
      </h1>

      <div className="flex flex-row mb-5 justify-between items-center">
        <div>Kaikki kurssit</div>

        <Link to={"/courses/new"}>
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
