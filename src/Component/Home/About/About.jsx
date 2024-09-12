import React from "react";
import "./About.css";
import img from "../../../images/121212.png"

export default function About() {
  return (
      <section id="About" class="container">

          <div class="content">
            <div class="text-side">
            <hr />
              <h2>
                ABOUT THE <span>MORS</span> EPORTS TEAM
              </h2>
              <p>
                It is an saudi team from Riyadh, established in 2021 and the
                team includes players in various games including: Call of duty ,
                League of Legends, Fortnite, Valorant
              </p>
              <div>meet the team</div>
            </div>

            <div class="img-side contant-home2">
              <a href="https://www.youtube.com">
                <i class="fa-sharp fa-regular fa-circle-play"></i>
              </a>
              <img src={img} alt="" />
            </div>
          </div>
      </section>
  );
}
