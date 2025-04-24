import {create} from "zustand";
import Note from "../types/Note";

interface NoteState {
    notes: Note[];
    setNotes: (notes: Note[]) => void;
    addNote: (note: Note) => void;
    deleteNote: (id: number) => void
}

const useNoteStore = create<NoteState>((set) => ({
    notes: [],
    setNotes: (notes) => set({notes}),
    addNote: (note) => set((state) => ({
        notes: [...state.notes, note]
    })),
    deleteNote: (id) => set((state) => ({notes: state.notes.filter((note) => note.id !== id)}))
}))

export {useNoteStore}