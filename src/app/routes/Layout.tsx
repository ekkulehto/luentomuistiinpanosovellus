import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import { useFetchAllData } from "@/features/notes/hooks/useFetchData";

export default function AppLayout() {
  useFetchAllData();

  return (
    <div className="max-w-4xl mx-auto">
      <Navigation />
      <Outlet />
      <Toaster /> {/* Tämä mahdollistaa ilmoituksien lähettämisen */}
    </div>
  );
}
