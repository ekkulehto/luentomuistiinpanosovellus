export const GetNextFreeCourseId = (courses: { id: number }[]): number => {
    const usedIds = new Set(courses.map(course => course.id))
    let id = 0
    while (usedIds.has(id)) {
      id++
    }
    return id
  }