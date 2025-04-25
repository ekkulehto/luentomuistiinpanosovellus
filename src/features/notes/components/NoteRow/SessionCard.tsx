import { Card, CardContent } from "@/components/ui/card";

type Props = {
  text: string;
};

export default function SessionCard({ text }: Props) {
  return (
    <div className="mb-5">
      <Card>
        <CardContent className="break-words whitespace-pre-wrap">
          <p>{text}</p>
        </CardContent>
      </Card>
    </div>
  );
}
