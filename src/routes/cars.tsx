// src/routes/contact.tsx
import { createRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/CarsPage";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cars",
  component: ContactPage,
});
