import React from "react";
import "./Main.css";
import player from "../../../images/new player.png";

export default function Main() {
  return (
    <section id="main" className="container">
      <div className="content">
        <div className="card">
          <img src={player} alt="" />
          <h1>VorTy</h1>
          <h2>middle</h2>
          <div className="icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
