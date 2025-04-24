import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  onConfirm: () => void;
};

export default function DeleteCourseDialog({ onConfirm }: Props) {
  return (
    <AlertDialog>
      {/* as child estää sisäkkäiset buttonit */}
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <X />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Oletko aivan varma?</AlertDialogTitle>
          <AlertDialogDescription>
            Tätä toimenpidettä ei voi perua. Tämä poistaa valitun kurssin sekä
            KAIKKI siihen lisätyt muistiinpanot lopullisesti.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Peruuta</AlertDialogCancel>
          {/* as child estää sisäkkäiset buttonit täälläkin */}
          <AlertDialogAction asChild onClick={onConfirm}>
            <Button className="text-white" variant="destructive">
              Jatka
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
