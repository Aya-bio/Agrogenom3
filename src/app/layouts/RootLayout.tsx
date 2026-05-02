import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Outlet />
    </div>
  );
}
