import {create} from "zustand";
import Note from "@/types/Note";

interface SessionNoteState {
    sessionNotes: Note[];
    setSessionNotes: (sessionNotes: Note[]) => void;
    addSessionNote: (sessionNote: Note) => void;
    // removeNote: (note: Note) => void
}

const useSessionNoteStore = create<SessionNoteState>((set) => ({
    sessionNotes: [],
    setSessionNotes: (sessionNotes) => set({sessionNotes}),
    addSessionNote: (sessionNote) => set((state) => ({
        sessionNotes: [...state.sessionNotes, sessionNote]
    })),
}))

export {useSessionNoteStore}