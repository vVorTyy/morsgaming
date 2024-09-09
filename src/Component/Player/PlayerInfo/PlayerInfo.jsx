import React from "react";
import "./PlayerInfo.css";
import img from "../../../images/111.png";


export default function PlayerInfo() {
  return (
    <section id="player-info" className="container">
      <div className="content">
        <div className="card">
          <div className="left-side">
          <img src={img} alt="" />
            <h1>mors<span>team</span></h1>
          </div>

          <div className="right-side">
            <h1>Ksa<span>nationality</span></h1>
            <h1>26<span>age</span></h1>
            <h1>middle<span>role</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}
