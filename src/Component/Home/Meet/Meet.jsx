import React from "react";
import "./Meet.css";
import player from "../../../images/new player.png";

const meetPlayer = [
  {
    name: "VORTY",
    side: "middel",
  },
  {
    name: "VORTY",
    side: "middel",
  },
  {
    name: "VORTY",
    side: "middel",
  },
  {
    name: "VORTY",
    side: "middel",
  },
  
];

export default function Meet() {
  return (
    <section id="meet-team" className="container">
        <h1>
          meet our <span>elite</span> team
        </h1>
      <div className="content">
        {meetPlayer.map((e, index) => {
          return (
            <>
              <div key={index} class="card">
                  <div className="images">
                    <img src={player} alt="" />
                  </div>
                  <div class="description">
                    <h3>
                      {e.name} <br /> <span>{e.side}</span>
                    </h3>
                  </div>
                </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
