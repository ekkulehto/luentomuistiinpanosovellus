import { Outlet } from "react-router";
import NewCourseHeader from "@/features/courses/components/Header/NewCourseHeader";

export default function NewCourseLayout() {
  return (
    <div>
      <NewCourseHeader />
      <Outlet />
    </div>
  );
}
