import {create} from "zustand";

interface SelectedCourseState {
    courseId: number;
    courseName: string;
    setCourseId: (id: number) => void;
    setCourseName: (name: string) => void;
}

const useSelectedCourseStore = create<SelectedCourseState>((set) => ({
    courseId: -1,
    courseName: "",
    setCourseName: (name) => set({courseName:name}),
    setCourseId: (id) => set({courseId:id}),
}))

export {useSelectedCourseStore}