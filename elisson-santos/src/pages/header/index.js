import React from "react";
import { FaBars } from "react-icons/fa";

import "./styles.css";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="name">Elisson.</h1>
      <div className="menu">
        <p>Home</p>
        <p>About</p>
        <p>Portfolio</p>
        <p>Services</p>
        <p>Contact</p>
        <FaBars size={20} color="#ADACAC" />
      </div>
    </header>
  );
}
