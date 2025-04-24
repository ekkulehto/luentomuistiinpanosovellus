import { create } from "zustand"

interface DropdownMenuState {
    isLocked: boolean,
    setIsLocked: (value: boolean) => void
}

export const useDropdownMenuStore = create<DropdownMenuState>((set) => ({
    isLocked: false,
    setIsLocked: (value) => set(({isLocked: value})),
    })
)