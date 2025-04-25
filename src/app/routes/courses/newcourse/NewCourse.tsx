import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import NewCourseForm from "@/features/courses/components/NewCourseForm";

export default function NewCourse() {
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
        Lisää uusi kurssi
      </h1>
      <div className="flex justify-center">
        <NewCourseForm />
      </div>
    </div>
  );
}
