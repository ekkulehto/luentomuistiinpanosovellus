import Course from "@/types/Course";

export default interface Note {
  id: number;
  text: string;
  course: Course;
  timestamp: Date;
}
