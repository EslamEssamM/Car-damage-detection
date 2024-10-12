import { createFileRoute } from "@tanstack/react-router";
import { DetectionPage } from "@/pages/DetectionPage";

export const Route = createFileRoute("/detection")({
  component: DetectionPage,
});
