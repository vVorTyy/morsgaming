import React from "react";
import "./WatchUs.css";

import  imgOne from "../../../images/img.png";
import  imgTwo from "../../../images/img (2).png";
import  imgThree from "../../../images/img (3).png";
import  imgFour from "../../../images/img (4).png";
import  imgFive from "../../../images/img (5).png";
import  imgSex from "../../../images/img (4).png";




export default function WatchUs() {
  return (
    <section id="watch-us" className="container">
      <div className="content">
        <div>
          <i class="fa-solid fa-circle-play"></i>{" "}
          <img src={imgOne} alt="" />
        </div>
        <div>
          <i class="fa-solid fa-circle-play"></i>
          <img src={imgTwo} alt="" />
        </div>
        <div>
          <i class="fa-solid fa-circle-play"></i>
          <img src={imgThree} alt="" />
        </div>
        <div>
          <i class="fa-solid fa-circle-play"></i>
          <img src={imgFour} alt="" />
        </div>
        <div>
          <i class="fa-solid fa-circle-play"></i>
          <img src={imgFive} alt="" />
        </div>
        <div>
          <i class="fa-solid fa-circle-play"></i>
          <img src={imgSex} alt="" />
        </div>
      </div>
    </section>
  );
}
