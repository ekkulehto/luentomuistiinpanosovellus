import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Card, CardContent } from "@/components/ui/card";
import { NotebookPen } from "lucide-react";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <h1
        className={
          isDesktop
            ? "text-4xl font-bold mb-20 text-center"
            : "text-3xl font-bold mb-15 text-center"
        }
      >
        Etusivu
      </h1>
      <div>
        <Card>
          <CardContent>
            {" "}
            <div className="flex flex-col items-center justify-evenly h-100">
              <NotebookPen className="h-50 w-50" />
              <h2 className="text-2xl font-bold text-right">
                Luentomuistiinpanosovellus
              </h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
