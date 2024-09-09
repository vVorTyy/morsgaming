import React from "react";
import "./Articales.css";
import numOne from "../../../images/FRIST ONE ON NAFS 2.png";
import numTwo from "../../../images/esports team1.jpg.png";
import numThree from "../../../images/esports8.jpg.png";

const data = [
  {
    img: numOne,
    title: "esports",
    date: "JULY 13, 2021",
    description:
      "THE TEAM HAS TOOK THE FIRST PLACE IN THIS MONTH , WHAT’S NEW!",
  },
  {
    img: numTwo,
    title: "esports",
    date: "JULY 13, 2021",
    description: "OUR NEW BRANDED T-SHIRTS ARE NEW FOR SALE ON OUR WEPSITE",
  },
  {
    img: numThree,
    title: "esports",
    date: "JULY 13, 2021",
    description: "WE WON THE SAUDI SUP FOR THE GAME CALL OF DUTY",
  },
];

export default function Articales() {
  return (
    <section id="articales" className="container">
      <div class="content">
        <div class="blog-art">
          <h1>
            blog
            <br />
            <span>articales</span>
          </h1>
          <h2>see all</h2>
        </div>
        <div className="card-comtent">
          {data.map((e, index) => {
            return (
              <>
                <div key={index} class="card">
                  <img src={e.img} alt="" />
                  <div class="description">
                    <h1>{e.title}</h1>
                    <h2>{e.date}</h2>
                  </div>
                  <div>
                    <p>{e.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
