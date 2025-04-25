import { Outlet } from "react-router";
import CoursesHeader from "@/features/courses/components/Header/CoursesHeader";

export default function CoursesLayout() {
  return (
    <div>
      <CoursesHeader />
      <Outlet />
    </div>
  );
}
