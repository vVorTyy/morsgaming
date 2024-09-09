import React from "react";
import "./AboutPlayer.css";
import img from "../../../images/gost3.jpg";

export default function AboutPlayer() {
  return (
    <section id="about-player" className="container">
      <div className="content">
        <div className="left-side">
          <img src={img} alt="" />
        </div>
        <div className="right-side">

          <p>
          Lorem ipsum dolor sit amet, Aperiam quas, delectus cum dignissimos
            quae. Necessitatibus voluptatum debitis aut harum laboriosam dolorem
            repellendus quaerat esse vitae et.            Lorem ipsum dolor sit amet, Aperiam quas, delectus 
          </p>
        </div>
      </div>
    </section>
  );
}
