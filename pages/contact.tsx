import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <ContactForm onSubmitted={(data) => console.log("Form submitted:", data)} />
    </>
  );
}
