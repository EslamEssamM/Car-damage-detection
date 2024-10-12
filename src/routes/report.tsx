// src/routes/about.tsx
import { createRoute } from "@tanstack/react-router";
import Report from "@/pages/ReportPage";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: Report,
});
