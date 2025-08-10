import { Link } from "react-router-dom";
import { useState } from "react";
import "../Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">Krishna Naam Japa</div>

      {/* Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/guide" onClick={() => setOpen(false)}>Guide</Link>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "toggle" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
