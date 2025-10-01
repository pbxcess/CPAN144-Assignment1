/*This will be a button clicking event
It will include mycontact info that you can choose to hide or show on the main page*/

"use client";
import React, { useState } from "react";


export default function BtnClick() {
    const [showPanel, setShowPanel] = useState(false);


    return (
        <section className="card">
        <h2>My Email</h2>
        <button
            className="btn"
            onClick={() => setShowPanel((s) => !s)}
            aria-expanded={showPanel}
            aria-controls="toggle-panel"
        >
            {showPanel ? "Hide" : "Show"}
        </button>
        {showPanel && (
            <div id="toggle-panel" className="panel">
                <p>
                    bernardino.pka@gmail.com
                </p>
             </div>
            )}


            <style jsx>{`
                .card { background: #0f172a0d; border: 1px solid #e5e7eb; padding: 16px; border-radius: 14px; margin: 16px 0; }
                .btn { padding: 8px 14px; border-radius: 10px; border: 1px solid #d1d5db; background: #738597ff; cursor: pointer; font-weight: 600; }
                .btn:hover { filter: brightness(0.97); }
                .panel { margin-top: 10px; background: #395072ff; border: 1px dashed #df7edfff; padding: 10px; border-radius: 10px; }
            `}</style>
        </section>
    );
}
