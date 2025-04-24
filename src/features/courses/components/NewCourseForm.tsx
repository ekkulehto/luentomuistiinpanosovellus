import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCourseStore } from "../stores/useCourseStore";
import { GetNextFreeId } from "@/utils/getNextFreeId";
import Course from "../types/Course";

export default function NewCourseForm() {
  const [text, setText] = useState("");
  const courses = useCourseStore((state) => state.courses);
  const addCourse = useCourseStore((state) => state.addCourse);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    if (!text.length) {
      toast.error(`Virhe!`, {
        description: "Et voi tallentaa kurssia ilman nimeä.",
      });
      return;
    }

    const id = GetNextFreeId(courses);

    const newCourse: Course = {
      id: id,
      name: text,
    };

    addCourse(newCourse);

    toast(`Opintojakso ${text} (id:${id}) lisätty `, {
      description: `${new Date().toLocaleString()}`,
      action: {
        label: "Peruuta",
        onClick: () => deleteCourse(id),
      },
    });

    setText("");
  };

  return (
    <Card className="w-xl">
      <CardHeader>
        <CardTitle>Uusi kurssi</CardTitle>

        <CardDescription>
          Lisää uusi kurssi antamalla sille nimi ja painamalla "Lisää"
          painiketta.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nimi</Label>
              <Input
                value={text}
                onChange={(event) => handleChange(event)}
                id="name"
                placeholder="Lisättävän kurssin nimi"
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={handleClick}>Lisää</Button>
        <Button onClick={() => navigate(-1)} variant="destructive">
          Takaisin
        </Button>
      </CardFooter>
    </Card>
  );
}
