import React from 'react'
import Main from './Main/Main'
import PlayerInfo from './PlayerInfo/PlayerInfo'
import AboutPlayer from './AboutPlayer/AboutPlayer'
import State from './State/State'
import Links from './Links/Links'
import WatchUs from './WatchUs/WatchUs'
import Sponsor from './Sponsor/Sponsor'
import SocialMedia from './SocialMedia/SocialMedia'


export default function Player() {
  return (
    <div>
      <Main/>
      <PlayerInfo/>
      <AboutPlayer/>
      <State/>
      <Links/>
      <WatchUs/>
      <Sponsor/>
      <SocialMedia/>
    </div>
  )
}
