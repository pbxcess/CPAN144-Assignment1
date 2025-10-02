/*This will be a button clicking event
It will include mycontact info that you can choose to hide or show on the main page*/

"use client";
import React, { useState } from "react";

type ToggleKey = "name" | "email" | "phone"

type ContactInfoProps = {
    name: string;
    email: string;
    phone: string;
    defaultOpen? : Partial<Record<ToggleKey, boolean>>;
}

export default function ContactInfo({
    name,
    email,
    phone,
    defaultOpen,
}: ContactInfoProps) {
    const [open, setOpen] = useState<Record<ToggleKey, boolean>>({
        name: !!defaultOpen?.name,
        email: !!defaultOpen?.email,
        phone: !!defaultOpen?.phone,
    });

    const toggle = (key: ToggleKey) =>
        setOpen((prev) => ({ ...prev, [key] : !prev[key] }));


    return (
        <section className="card" aria-labelledby="contact-heading">
        <h2 id="contact-heading">My Contact Info</h2>

        {/*NAME*/}
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
            <p>{name}</p>
        </div>

        {/*EMAIL*/}
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
            <p>{email}</p>
        </div>

        {/*PHONE#*/}
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
            <p>{phone}</p>
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
