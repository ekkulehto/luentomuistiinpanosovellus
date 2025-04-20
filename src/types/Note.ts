import Course from "./Course";

export default interface Note {
    id: number;
    text: string;
    course: Course;
    timestamp: Date;
}