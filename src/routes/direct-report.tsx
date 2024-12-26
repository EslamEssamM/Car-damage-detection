import { createRoute } from "@tanstack/react-router";
import { DirectReportPage } from "@/pages/DirectReportPage";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/direct-report",
  component: DirectReportPage,
});
