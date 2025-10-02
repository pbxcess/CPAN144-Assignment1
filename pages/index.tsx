import React from "react";
import ContactInfo from "../components/ContactInfo";
import FilteredList, { SkillItem } from "../components/FilteredList";
import HoverCard from "../components/HoverCard";

export default function Home() {
  return (
    <>
      <h1>Welcome to my first React Project &nbsp;1</h1>

      <ContactInfo
        name="Princess Krish Anne Bernardino"
        email="pkabernardino@gmail.com"
        phone="(905) 462-2483"
        defaultOpen = {{ name: true }}
      />

      <FilteredList items = {skills} />

      <HoverCard 
        caption="Hover to switch between my two cats!"
      />
    </>
  );
}
