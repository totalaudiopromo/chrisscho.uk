import { zineOgImage, OG_SIZE } from "../lib/og";

export const alt = "Chris Schofield — AI Agentic Workflow Consultant & Systems Architect";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
  return zineOgImage({
    kicker: "[ Profile // Vol. 01 ]",
    title: "Chris Schofield",
    subtitle: "AI Agentic Workflow Consultant & Systems Architect",
  });
}
