import Course from "@/features/courses/types/Course";

export default interface Note {
    id: number;
    text: string;
    course: Course;
    timestamp: Date;
}