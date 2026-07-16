import React from "react";

export default function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  return (
    <>
      {data.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
