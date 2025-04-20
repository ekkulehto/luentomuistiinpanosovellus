import {create} from "zustand";

interface SelectedCourseState {
    courseId: string;
    setCourseId: (id: string) => void;
}

const useSelectedCourseStore = create<SelectedCourseState>((set) => ({
    courseId: "",
    setCourseId: (id) => set({courseId:id}),
}))

export {useSelectedCourseStore}