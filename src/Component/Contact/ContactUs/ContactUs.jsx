import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <section id="contact-us" className="container">
      <h1>
        mors e-sports team <span>contact us</span>{" "}
      </h1>
      <div class="content">
        <div class="card">
          <div>
            <i class="fa-solid fa-envelope"></i>
            morsgamingg@gmail
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            Saudi Arabia, Riyadh
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            +966533540934
          </div>
        </div>
      </div>
    </section>
  );
}
