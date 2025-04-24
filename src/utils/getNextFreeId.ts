export const GetNextFreeId = (items: { id: number }[]): number => {
    const usedIds = new Set(items.map(item => item.id))
    let id = 0
    while (usedIds.has(id)) {
      id++
    }
    return id
  }