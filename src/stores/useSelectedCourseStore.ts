import {create} from "zustand";

interface SelectedCourseState {
    courseId: number;
    setCourseId: (id: number) => void;
}

const useSelectedCourseStore = create<SelectedCourseState>((set) => ({
    courseId: -1,
    setCourseId: (id) => set({courseId:id}),
}))

export {useSelectedCourseStore}