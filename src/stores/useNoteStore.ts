import {create} from "zustand";
import Note from "@/types/Note";

interface NoteState {
    notes: Note[];
    setNotes: (notes: Note[]) => void;
    addNote: (note: Note) => void;
    // removeNote: (note: Note) => void
}

const useNoteStore = create<NoteState>((set) => ({
    notes: [],
    setNotes: (notes) => set({notes}),
    addNote: (note) => set((state) => ({
        notes: [...state.notes, note]
    })),
}))

export {useNoteStore}