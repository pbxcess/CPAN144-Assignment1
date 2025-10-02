/*HoverCard that will change the background between pictures of my two cats when you hover it!*/

"use client";
import React, { useState } from "react";

type HoverCardProps = {
  imgA: string; // URL or /public path or /localpath
  imgB: string;
  caption?: string;
};

export default function HoverCard({ imgA, imgB, caption }: HoverCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <section className="card">
      <h2>Hover Card</h2>
      <div
        className="hover-wrap"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        role="img"
        aria-label={caption ?? "Hover to switch image"}
        style={{
          backgroundImage: `url(${hover ? imgB : imgA})`,
        }}
      />
      {caption && <p className="hint">{caption}</p>}

      <style jsx>{`
        .card { background: #0f172a0d; border: 1px solid #e5e7eb; padding: 16px; border-radius: 14px; margin: 16px 0; }
        .hover-wrap {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 16/9;
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          border: 1px dashed #df7edfff;
          transition: background-image 150ms ease;
        }
        .hint { color: #6b7280; margin-top: 8px; }
      `}</style>
    </section>
  );
}