import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

async function loadFonts() {
  const fontsDir = path.join(process.cwd(), "src/assets/fonts");
  const [serif, mono] = await Promise.all([
    readFile(path.join(fontsDir, "InstrumentSerif-Regular.ttf")),
    readFile(path.join(fontsDir, "JetBrainsMono-Bold.ttf")),
  ]);
  return [
    { name: "Instrument Serif", data: serif, weight: 400 as const, style: "normal" as const },
    { name: "JetBrains Mono", data: mono, weight: 700 as const, style: "normal" as const },
  ];
}

/** Zine-styled OG card shared by every route's opengraph-image. */
export async function zineOgImage({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAF9F6",
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "6px solid #171717",
            boxShadow: "16px 16px 0px #012641",
            backgroundColor: "#FAF9F6",
            padding: 56,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#171717",
                color: "#FAF9F6",
                fontFamily: "JetBrains Mono",
                fontSize: 24,
                letterSpacing: 4,
                padding: "8px 20px",
                textTransform: "uppercase",
              }}
            >
              {kicker}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 22,
                color: "#737373",
                letterSpacing: 2,
              }}
            >
              chrisscho.uk
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Instrument Serif",
              fontSize: title.length > 42 ? 68 : 84,
              color: "#0a0a0a",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", width: 72, height: 20, backgroundColor: "#ee005a" }} />
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: 26,
                color: "#404040",
                letterSpacing: 1,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
