import { Card, CardContent } from "@/components/ui/card";

import { NotebookPen } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-25 text-center">Etusivu</h1>
      <div>
        <Card>
          <CardContent>
            {" "}
            <div className="flex flex-row items-center justify-evenly h-70">
              <NotebookPen className="h-50 w-50" />
              <h2 className="text-3xl font-bold text-right">
                Luentomuistiinpanosovellus
              </h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
