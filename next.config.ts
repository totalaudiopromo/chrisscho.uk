import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      // Offer briefly launched under the music-only slug (16 Jul 2026)
      {
        source: "/services/music-ai-audit",
        destination: "/services/ai-workflow-audit",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
