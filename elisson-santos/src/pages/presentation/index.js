import React from "react";

import perfilImg from "../../assets/elisson.png";
import "./styles.css";

export default function Presentation() {
  return (
    <div className="presentation-container">
      <div>
        <h3>Ola, meu nome é</h3>
        <h1>ELISSON SANTOS</h1>
        <p>Sou um jovem garoto descobrindo o mundo.</p>
        <button className="button">
          <span>Meu Trabalho </span>
        </button>
      </div>
      <div>
        <img src={perfilImg} alt="Elisson Santos" />
      </div>
    </div>
  );
}
