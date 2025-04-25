import { useMediaQuery } from "@custom-react-hooks/use-media-query";

export default function NewCourseHeader() {
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
        Lisää uusi kurssi
      </h1>
    </>
  );
}
