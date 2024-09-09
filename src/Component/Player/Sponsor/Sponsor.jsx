import React from "react";
import "./Sponsor.css";
import img from "../../../images/1.png";

export default function Sponsor() {
  return (
    <div>
      <section id="sponsor" className="container">
        <h1>sponsor</h1>
        <div className="content">
          <div>
            <img src={img} alt="" />
          </div>

          <div>
            <img src={img} alt="" />
          </div>

          <div>
            <img src={img} alt="" />
          </div>

          <div>
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
