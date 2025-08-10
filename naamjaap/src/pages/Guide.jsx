// src/pages/Guide.jsx
import React from "react";
import "../Log.css";

export default function Guide() {
  return (
    <div className="guide-card">
      <h2>Japa Guide & Rules</h2>
      <section>
        <h3>What is a Mala?</h3>
        <p>A mala has 108 beads plus one guru bead. It's used for japa (mantra repetition).</p>
      </section>
      <section>
        <h3>How to Do Japa</h3>
        <ol>
          <li>Sit comfortably with a straight spine.</li>
          <li>Hold mala in right hand, move one bead per mantra.</li>
          <li>Do not cross the guru bead, reverse direction instead.</li>
        </ol>
      </section>
      <section>
        <h3>Etiquette</h3>
        <ul>
          <li>Keep a peaceful mindset.</li>
          <li>Use thumb and middle finger, not index finger.</li>
          <li>Be gentle with the beads.</li>
        </ul>
      </section>
      <footer className="guide-footer">
        <small>Practice daily — focus matters more than speed.</small>
      </footer>
    </div>
  );
}
