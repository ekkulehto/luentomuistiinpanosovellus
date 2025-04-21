import {create} from "zustand";
import Course from "@/types/Course";

interface CourseState {
    courses: Course[];
    setCourses: (courses: Course[]) => void;
    addCourse: (course: Course) => void;
    deleteCourse: (id: number) => void
}

const useCourseStore = create<CourseState>((set) => ({
    courses: [],
    setCourses: (courses) => set({courses}),
    addCourse: (course) => set((state) => ({
        courses: [...state.courses, course]
    })),
    deleteCourse: (id) => set((state) => ({courses: state.courses.filter((course) => course.id != id)}))
}))

export {useCourseStore}