import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ScanHistoryProvider } from "./context/ScanHistoryContext";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScanHistoryProvider>
          <RouterProvider router={router} />
        </ScanHistoryProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}