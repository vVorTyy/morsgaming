import React from "react";
import "./Matches.css";

const matches = [
  {
    clan1: "mors",
    clan2: "clan1",
    result: "2:1",
    twichLinkClanOne: "https://www.twitch.tv/",
    twichLinkClanTwo: "https://www.twitch.tv/",
    YoutubeLinkClanOne: "https://www.youtube.com",
    YoutubeLinkClanTwo: "https://www.youtube.com",
  },
  {
    clan1: "mors",
    clan2: "clan2",
    result: "3:1",
    twichLinkClanOne: "https://www.twitch.tv/",
    twichLinkClanTwo: "https://www.twitch.tv/",
    YoutubeLinkClanOne: "https://www.youtube.com",
    YoutubeLinkClanTwo: "https://www.youtube.com",
  },
  {
    clan1: "mors",
    clan2: "clan3",
    result: "3:5",
    twichLinkClanOne: "https://www.twitch.tv/",
    twichLinkClanTwo: "https://www.twitch.tv/",
    YoutubeLinkClanOne: "https://www.youtube.com",
    YoutubeLinkClanTwo: "https://www.youtube.com",
  },
  {
    clan1: "mors",
    clan2: "clan4",
    result: "2:4",
    twichLinkClanOne: "https://www.twitch.tv/",
    twichLinkClanTwo: "https://www.twitch.tv/",
    YoutubeLinkClanOne: "https://www.youtube.com",
    YoutubeLinkClanTwo: "https://www.youtube.com",
  },
  {
    clan1: "mors",
    clan2: "clan5",
    result: "5:3",
    twichLinkClanOne: "https://www.twitch.tv/",
    twichLinkClanTwo: "https://www.twitch.tv/",
    YoutubeLinkClanOne: "https://www.youtube.com",
    YoutubeLinkClanTwo: "https://www.youtube.com",
  },
];

export default function Matches() {
  return (
    <div id="matches" className="container">
      <h1>
        upcoming<span> &amp; </span>finished <br /> matches
      </h1>
      <h2 class="h2-6">______</h2>

      <div>
        <div class="content">
          {matches.map((e, index) => {
            return (
              <>
                <div class="card" key={index}>
                  <div className="right-side">
                    <div>{e.clan1}</div>
                    <div class="side-one">
                      watch <a href={e.twichLinkClanOne}><i class="fa-brands fa-twitch"></i>
                      </a>
                      <a href={e.YoutubeLinkClanOne}>
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                  <div className="result">{e.result}</div>
                  <div className="left-side">
                    <div>{e.clan2}</div>
                    <div class="side-two">
                      watch
                      <a href={e.twichLinkClanTwo}>
                        <i class="fa-brands fa-twitch"></i>
                      </a>
                      <a href={e.YoutubeLinkClanTwo}>
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

    </div>
  );
}
