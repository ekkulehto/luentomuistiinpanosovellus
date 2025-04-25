import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router";

export default function CoursesHeader() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <h1
        className={
          isDesktop
            ? "text-4xl font-bold mb-20 text-center"
            : "text-4xl font-bold mb-15 text-center"
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
    </>
  );
}
