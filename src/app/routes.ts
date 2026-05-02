import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { PlantDoctor } from "./pages/PlantDoctor";
import { SeedIntelligence } from "./pages/SeedIntelligence";
import { LivestockHealth } from "./pages/LivestockHealth";
import { Analytics } from "./pages/Analytics";
import { Marketplace } from "./pages/Marketplace";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "dashboard", Component: Dashboard },
      { path: "plant-doctor", Component: PlantDoctor },
      { path: "seed-intelligence", Component: SeedIntelligence },
      { path: "livestock-health", Component: LivestockHealth },
      { path: "analytics", Component: Analytics },
      { path: "marketplace", Component: Marketplace },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
