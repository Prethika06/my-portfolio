import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>

      {/* Hamburger button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)} >
        {isOpen ? "\u2716" : "\u2630"}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
