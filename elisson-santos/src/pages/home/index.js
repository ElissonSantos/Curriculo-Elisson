import React from "react";

import "./styles.css";

import Header from "../header";
import AboutMe from "../about-me";
import Experience from "../experience";
import GetInTouch from "../get-in-touch";
import MyService from "../my-service";
import Portfolio from "../portfolio";
import Presentation from "../presentation";
import Footer from "../footer";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Presentation />
      <AboutMe />
      <Experience />
      <Portfolio />
      <MyService />
      <GetInTouch />
      <Footer />
    </div>
  );
}
