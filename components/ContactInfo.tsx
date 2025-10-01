/*This will be a button clicking event
It will include mycontact info that you can choose to hide or show on the main page*/

"use client";
import React, { useState } from "react";

type ToggleKey = "name" | "email" | "phone"

export default function ContactToggles() {
    const [open, setOpen] = useState<Record<ToggleKey, boolean>>({
        name: false,
        email: false,
        phone: false,
    });

    const toggle = (key: ToggleKey) =>
        setOpen((prev) => ({ ...prev, [key] : !prev[key] }));


    return (
        <section className="card">
        <h2>My Contact Info</h2>

        <div className="row">
            <div className="label">Name</div>
            <button
            type="button"
            className="btn"
            onClick={() => toggle("name")}
            aria-expanded={open.name}
            aria-controls="panel-name"
            id="btn-name"
            >
                {open.name ? "Hide" : "Show"}
            </button>
        </div>

        <div
        id="panel-name"
        className="panel"
        role="region"
        aria-labelledby="btn-name"
        hidden={!open.name}
        >
            <p>Princess Krish Anne Bernardino</p>
        </div>

        <div className="row">
            <div className="label">Email</div>
            <button
            type="button"
            className="btn"
            onClick={() => toggle("email")}
            aria-expanded={open.email}
            aria-controls="panel-email"
            id="btn-email"
            >
                {open.email ? "Hide" : "Show"}
            </button>
        </div>

        <div
        id="panel-name"
        className="panel"
        role="region"
        aria-labelledby="btn-email"
        hidden={!open.email}
        >
            <p>pkabernardino@gmail.com</p>
        </div>

        <div className="row">
            <div className="label">Phone number</div>
            <button
            type="button"
            className="btn"
            onClick={() => toggle("phone")}
            aria-expanded={open.phone}
            aria-controls="panel-phone"
            id="btn-phone"
            >
                {open.phone ? "Hide" : "Show"}
            </button>
        </div>

        <div
        id="panel-name"
        className="panel"
        role="region"
        aria-labelledby="btn-phone"
        hidden={!open.phone}
        >
            <p>(905) 462-2483</p>
        </div>

            <style jsx>{`
                .card { background: #0f172a0d; border: 1px solid #e5e7eb; padding: 16px; border-radius: 14px; margin: 16px 0; }
                .btn { padding: 8px 14px; border-radius: 10px; border: 1px solid #d1d5db; background: #738597ff; cursor: pointer; font-weight: 600; }
                .btn:hover { filter: brightness(0.97); }
                .panel { margin-top: 10px; background: #395072ff; border: 1px dashed #df7edfff; padding: 10px; border-radius: 10px; }
            `}</style>
        </section>


    );
}
