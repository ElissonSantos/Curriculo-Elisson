import React from "react";
import { FaPhone, FaMailBulk, FaLocationArrow } from "react-icons/fa";

import "./styles.css";

export default function GetInTouch() {
  return (
    <div className="gettouch-container">
      <h1>Get In Touch</h1>
      <div>
        Esses sao meus meios de contato
        <FaPhone />
        <FaMailBulk />
        <FaLocationArrow />
      </div>
      <div>
        <input />
        <input />
        <textarea />
      </div>
    </div>
  );
}
