import React from "react";
import ContactInfo from "../components/ContactInfo";
import FilteredList, { SkillItem } from "../components/FilteredList";

const skills: SkillItem[] = [
  { id: 1, label: "Intro to JavaScript", active: true },
  { id: 2, label: "Intro to Web Development", active: true },
  { id: 3, label: "Algorithms and Problem Solving", active: true },
  { id: 4, label: "Next.js and React", active: false },
  { id: 5, label: "Object-Oriented Programming", active: false },
  { id: 6, label: "Fundamentals of Numeric Computation", active: false },
];

export default function About() {
    return (
        <>
            <h1>About Me!</h1>
            <p>I am a Computer Programming student currently studying at Humber Polytechnic College</p>
            <p>I am in my second semester and look forward to learning lots more about programming!</p>
            <p>Prior to coming to Humber, I obtained a Kinesiology degree at Laurentian University!</p>
            <p>I also played on the Women's Varsity Basketball Team for 5 years there!</p>
            <p>If you have any questions please redirect yourself to the <a href="../pages/contact.tsx">Contact Me</a> page</p>
            <p>Please find my contact information and skills below as well, enjoy!</p>

            <ContactInfo
                name="Princess Krish Anne Bernardino"
                email="pkabernardino@gmail.com"
                phone="(905) 462-2483"
                defaultOpen={{ name: true }}
            />

            <FilteredList items={skills} />
        </>
    )
}