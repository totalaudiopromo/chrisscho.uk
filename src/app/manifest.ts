import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chris Schofield — AI Agentic Workflow Consultant",
    short_name: "chrisscho.uk",
    description:
      "Systems architect and AI agentic workflow consultant. Portfolio of shipped music-tech SaaS and automation systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9F6",
    theme_color: "#ee005a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
