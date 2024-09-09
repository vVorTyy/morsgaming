import React from "react";
import "./About.css";
import img from "../../../images/gost5.png";

export default function About2() {
  return (
    <section id="about-2" className="container">
      <div className="content">
        <div className="card">


          <div className="left-side">
            <h1>
              about the mors<span> esports team </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique consectetur odio, at posuere metus egestas vel. Fusce
              vel magna sodales, tempus leo in, placerat leo. Integer placerat
              tortor purus, et viverra diam lacinia eget. Phasellus sit amet
              efficitur erat. Etiam felis est, maximus ut dolor vel, iaculis
              suscipit metus. Vivamus id semper ipsum, id ultricies dui <br /> <br />
              Suspendisse non eros quis ante vulputate luctus ut sed eros.
              Pellentesque vestibulum volutpat interdum. Morbi ornare fringilla
              ante, vitae fringilla est sollicitudin eu. Duis in dui egestas
              ligula pharetra malesuada quis eu orci. Donec posuere quam eget
              vehicula faucibus. Duis hendrerit nisi id orci pellentesque
              aliquet. Aenean et eleifend purus, eget bibendum nisi.
            </p>
          </div>
          <div className="right-side">
            <img src={img} alt="" />
          </div>


        </div>
      </div>
    </section>
  );
}
