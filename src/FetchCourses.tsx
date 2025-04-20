import useSWR from "swr"
import axios from "axios"
import Course from "./types/Course"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function FetchCourses() {
    const {data: courses, error, isLoading} = useSWR<Course[]>("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses", fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    
    return (
        <div>
            {courses?.map((course) =>
                <div key={course.id}>
                    <p>{course.id} {course.name}</p>
                </div>
            )}
        </div>
    )
}