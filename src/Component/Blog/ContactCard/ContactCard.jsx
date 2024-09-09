import React from "react";
import "./ContactCard.css";
import img from "../../../images/12.png";

export default function ContactCard() {
  return (

    <section id="contact-card" className="container">
        <div class="content">
          <div class="card">
            <img src={img} alt="" />
            <h1>
              WANNA BE A PART <br /> <span> OF THE PACK? </span>
            </h1>
          </div>
          <form
            action="https://formspree.io/f/xdovbkke"
            method="POST"
          >
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required=""
            />
            <button type="submit">send massage</button>
          </form>
        </div>
    </section>
  );
}
