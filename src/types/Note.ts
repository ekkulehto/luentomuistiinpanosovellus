import Course from "./Course";

export default interface Note {
    id: string;
    text: string;
    course: Course;
    timestamp: string;
}