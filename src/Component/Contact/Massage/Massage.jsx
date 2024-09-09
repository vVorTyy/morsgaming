import React from "react";
import "./Massage.css"

export default function Massage() {
  return (

    
      <section id="massage" className="container">
        <h2>
          lets get<span> touch! </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Quaerat quam praesentium inventore
        </p>

        <div class="content">
          <form
            class="form-contact"
            action="https://formspree.io/f/xdovbkke"
            method="POST"
          >
            <div class="frist-part-input">
              <input
                type="text"
                placeholder="Frist Name"
                name="frist name"
                required=""
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last name"
                required=""
              />
            </div>
            <div class="second-part-input">
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                required=""
              />
              <input
                type="number"
                placeholder="Phone number"
                name="Phone Number "
                required=""
              />
            </div>
            <div class="last-part-input">
              <textarea
                name="message"
                placeholder="Enter yout massage"
              ></textarea>
            </div>
            <div class="send-emaill">
              <button type="submit">send massage</button>
            </div>
          </form>
        </div>
      </section>
  );
}
