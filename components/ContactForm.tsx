"use client";
import React, { useState } from "react";

type ContactFormProps = {
  onSubmitted?: (data: { name: string; email: string; message: string }) => void;
};

function ContactFormComponent({ onSubmitted }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    onSubmitted?.(form);
  }

  return (
    <section className="card">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="success" role="status">
          Thanks, {form.name}! I’ll get back to you at {form.email}.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={4} value={form.message} onChange={handleChange} required />
          </label>
          <button className="btn" type="submit">Send</button>
        </form>
      )}

      <style jsx>{`
        .card { background:#0f172a0d; border:1px solid #e5e7eb; padding:16px; border-radius:14px; margin:16px 0; }
        .form { display:grid; gap:12px; }
        label { display:grid; gap:6px; }
        input, textarea { border:1px solid #d1d5db; border-radius:10px; padding:8px 10px; }
        .btn { padding:8px 14px; border-radius:10px; border:1px solid #d1d5db; background:#738597ff; cursor:pointer; font-weight:600; }
        .btn:hover { filter:brightness(0.97); }
        .success { color:#065f46; background:#ecfdf5; border:1px solid #a7f3d0; padding:8px 10px; border-radius:10px; }
      `}</style>
    </section>
  );
}

export default ContactFormComponent; // ✅ explicit default
