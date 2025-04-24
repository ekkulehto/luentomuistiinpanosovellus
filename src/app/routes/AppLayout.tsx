import { Outlet } from "react-router";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";

export function AppLayout() {
  return (
    <div className="max-w-4xl mx-auto">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  );
}
