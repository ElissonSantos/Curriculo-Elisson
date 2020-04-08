import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import "./styles.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <h1>My Experience</h1>
      <div>
        <p>IML</p>
        <p>2018-2019</p>
        <FaCheckCircle />
        <p>Suporte Tecnico e tal</p>
      </div>
      <div>
        <p>SANEPAR</p>
        <p>2019</p>
        <FaCheckCircle />
        <p>Desenvolvendo em Angular e Nest.js</p>
      </div>
    </div>
  );
}
