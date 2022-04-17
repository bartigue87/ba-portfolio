import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <section className="nav-section">
      <ul className="navbar">
        <li className="nav-selection">
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li className="nav-selection">
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li className="nav-selection">Résumé</li>
      </ul>
    </section>
  );
}
