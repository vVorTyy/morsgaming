import React from "react";
import "./Games.css";
import numOne from "../../../images/game2.png";
import numTwo from "../../../images/game 2.png";
import numThree from "../../../images/game3.png";

export default function Games() {
  return (
    <section id="games" className="container">
      <h1>
        games <br />
        <span>_____</span>
      </h1>
      <div>
        <div class="content">
          <div className="images">
            <img src={numOne} alt="" />
            <img class="img" src={numTwo} alt="" />
            <img src={numThree} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
