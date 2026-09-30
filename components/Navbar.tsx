"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "./Icons";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">Y</span>
          <span>Yogita<span className="brand-dot">.</span></span>
        </a>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
         <a
  href="https://drive.google.com/file/d/1u-pnqSguRYKqREp909Ar5OYd19OP49wf/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
