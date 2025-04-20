import useSWR from "swr"
import axios from "axios"
import Course from "./types/Course"
import { useCourseStore } from "./stores/useCourseStore"
import { useEffect } from "react"

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function FetchCourses() {
    const setCourses = useCourseStore((state) => state.setCourses)

    const {data: courses, error, isLoading} = useSWR<Course[]>(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses", 
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
    )

    useEffect(() => {
        if (courses) {
            setCourses(courses)
        }
    }, [courses, setCourses]);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
}