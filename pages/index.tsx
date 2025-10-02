import React from "react";
import ContactInfo from "../components/ContactInfo";
import FilteredList, { SkillItem } from "../components/FilteredList";
import HoverCard from "../components/HoverCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to my first React Project &nbsp;1</h1>
        <p>Please use the Navbar above to explore more about me and see the interactive components</p>
      </section>
      <section>
        <HoverCard
        caption="Hover to switch between my two cats!" />
      </section>

      <style jsx>{`
        .hero {
          display: grid;
          gap: 12px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          background: #f9fafb;
        }
        h1 { margin: 0; }
      `}</style>
    </>
  );
}
