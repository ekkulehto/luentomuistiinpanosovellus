import TextInput from "./TextInput";
import { useSearchParams } from "react-router";

export default function AddNewNote() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("name") ?? "";

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5">
        <div>Valittu kurssi: {courseName}</div>
      </div>
      <div>
        <TextInput />
      </div>
    </div>
  );
}
