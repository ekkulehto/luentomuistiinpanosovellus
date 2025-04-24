import { create } from "zustand";

interface CourseDropdownState {
  isLocked: boolean;
  setIsLocked: (value: boolean) => void;
}

export const useCourseDropdownStore = create<CourseDropdownState>((set) => ({
  isLocked: false,
  setIsLocked: (value) => set({ isLocked: value }),
}));
