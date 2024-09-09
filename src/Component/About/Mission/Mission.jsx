import React from "react";
import "./Mission.css";
import img from "../../../images/gost3.jpg";

export default function Mission() {
  return (
    <section id="mission" className="container">
      <div className="content">
        <div className="left-side">
          <img src={img} alt="" />
        </div>
        <div className="right-side">
          <p>
            <span>our mission</span>
            Lorem ipsum dolor sit amet, Aperiam quas, delectus cum dignissimos
            quae. Necessitatibus voluptatum debitis aut harum laboriosam dolorem
            repellendus quaerat esse vitae et.
          </p>
          <p>
            <span>our team</span>
            Lorem ipsum dolor sit amet, Aperiam quas, delectus cum dignissimos
            quae. Necessitatibus voluptatum debitis aut harum laboriosam dolorem
            repellendus quaerat esse vitae et.
          </p>
        </div>
      </div>
    </section>
  );
}
