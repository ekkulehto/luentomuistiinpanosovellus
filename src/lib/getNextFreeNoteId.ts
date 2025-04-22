export const GetNextFreeNoteId = (notes: { id: number }[]): number => {
    const usedIds = new Set(notes.map(note => note.id))
    let id = 0
    while (usedIds.has(id)) {
      id++
    }
    return id
  }