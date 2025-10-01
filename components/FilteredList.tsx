/*A filtered list using conditional rendering to show the comp. programming skills I have "learned" and are still learning*/

"use client";
import React, { useMemo, useState } from "react";

type Item = { id: number; label: string; active: boolean };

export default function FilterList() {
  const items: Item[] = useMemo(
    () => [
      { id: 1, label: "Intro to JavaScript", active: true },
      { id: 2, label: "Intro to Web Development", active: true },
      { id: 3, label: "Algorithms and Problem Solving", active: true },
      { id: 4, label: "Next.js and React", active: false },
      { id: 5, label: "Object-Oriented Programming", active: false },
      { id: 5, label: "Fundamentals of Numeric Computation", active: false },
    ],
    []
  );

  const [showActive, setShowActive] = useState(true);
  const filtered = items.filter((it) => it.active === showActive);

  return (
    <section className="card">
      <h2>Current Computer Programming Skills Learned</h2>
      <div className="row">
        <button
          className={`btn ${showActive ? "btn-primary" : ""}`}
          onClick={() => setShowActive(true)}
          aria-pressed={showActive}
        >
          Show Learned
        </button>
        <button
          className={`btn ${!showActive ? "btn-primary" : ""}`}
          onClick={() => setShowActive(false)}
          aria-pressed={!showActive}
        >
          Show Learning
        </button>
      </div>

      <ul className="list">
        {filtered.map((it) => (
          <li key={it.id} className="list-item">
            <span className={`badge ${it.active ? "on" : "off"}`}>
              {it.active ? "Active" : "Inactive"}
            </span>
            {it.label}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .card {
          background: #0f172a0d;
          border: 1px solid #e5e7eb;
          padding: 16px;
          border-radius: 14px;
          margin: 16px 0;
        }
        .row {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 10px 0;
        }
        .btn {
          padding: 8px 14px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          background: #f8779eff;
          cursor: pointer;
          font-weight: 600;
        }
        .btn:hover {
          filter: brightness(0.97);
        }
        .btn-primary {
          background: #7a263fff;
          border-color: #fd93bfff;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 10px 0 0;
        }
        .list-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px dashed #e5e7eb;
        }
        .badge {
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 9999px;
          border: 1px solid #d1d5db;
        }
        .badge.on {
          background: #008a30ff;
          border-color: #86efac;
        }
        .badge.off {
          background: #830404ff;
          border-color: #fca5a5;
        }
        .hint {
          color: #6b7280;
          font-size: 0.9rem;
          margin-top: 6px;
        }
      `}</style>
    </section>
  );
}
