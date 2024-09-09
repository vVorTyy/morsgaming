import React from "react";
import "./Hero.css";
import img from "../../../images/1212 modefited.png";

export default function HeroAbout() {
  return (
    <section id="hero-about" class="container">
      <h1>MORS E-SPORTS TEAM</h1>
      <h2>
        LEARN ABOUT
        <br />
        <span>OUR TEAM</span>
      </h2>
        <div class="img-side">
          <a
            href="https://www.youtube.com/watch?v=ujSOrHkkFDo"
            class="play-button"
          >
            <i class="fa-sharp fa-solid fa-circle-play"></i>
          </a>
          <img src={img} alt="Team Image" />
        </div>
    </section>
  );
}
