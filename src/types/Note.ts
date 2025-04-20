import Course from "./Course";

interface Note {
    id: number;
    text: string;
    course: Course;
    timestamp: string;
}

export default Note