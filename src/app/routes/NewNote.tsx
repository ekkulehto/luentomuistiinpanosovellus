import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { useParams } from "react-router";
import { DropdownMenu } from "@/features/notes/components/CourseDropdown/CourseDropdown";
import NewNoteForm from "@/features/notes/components/NewNoteForm";

export default function NewNote() {
  const { courseId } = useParams();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const textClass = !isDesktop ? "text-xs" : undefined;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Lisää uusi muistiinpano
      </h1>
      <div className="mb-5 flex flex-row justify-between items-center">
        <DropdownMenu isNotelist={false} />
        {courseId === "undefined" && (
          <p className={textClass}>
            Valitse kurssi lisätäksesi uuden muistiinpanon
          </p>
        )}
      </div>
      <div>
        <NewNoteForm />
      </div>
    </div>
  );
}
