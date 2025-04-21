import { Button } from "@/components/ui/button";
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
import { useCourseStore } from "./stores/useCourseStore";
import { ChangeEvent, useState } from "react";
import Course from "./types/Course";

import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function NewCourseInput() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const courses = useCourseStore((state) => state.courses);
  const addCourse = useCourseStore((state) => state.addCourse);

  const handleClick = () => {
    const newCourse: Course = {
      id: courses.length,
      name: text,
    };

    toast(`${text} lisätty kursseihin`, {
      description: `${new Date().toLocaleString()}`,
      id: courses.length,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });

    addCourse(newCourse);
    setText("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
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
          Peruuta
        </Button>
      </CardFooter>
    </Card>
  );
}
